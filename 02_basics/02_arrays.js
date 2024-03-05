const marvel_heroes = ["spiderman", "ironman", "Loki"]
const dc_heroes = ["Batman", "Aquaman", "Shazam"]
console.log(marvel_heroes.includes(dc_heroes)); //Output: false
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); //Output: [ 'spiderman', 'ironman', 'Loki', [ 'Batman', 'Aquaman', 'Shazam' ] ] Array inside an array the particular array is the one element
console.log(marvel_heroes[3]); //Output : [ 'Batman', 'Aquaman', 'Shazam' ]
//If we want to access the array inside the array of particular value then
console.log(marvel_heroes[3][2]); //Output : Shazam `This is messed up way`

const android = ["nokie", "samsung", "google"];
const windows = ["surface", "dell", "msi"];
const all_tech = android.concat(windows);
console.log(all_tech);

const another_array = [1, 2, 3,[4, 5, 6], 7, [8, 65,[11, 55, 12]]]
const real_array = another_array.flat(Infinity);
console.log(real_array); //Output :[1,  2, 3,  4,  5, 6,  7, 8, 65, 11, 55, 12]

console.log(Array.isArray("Avecek")); //to check if it is array or not
console.log(Array.from("avecek")); //to convert it into array

console.log(Array.from({name: "avecek"})); // Interesting case output is []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //Output: [ 100, 200, 300 ]
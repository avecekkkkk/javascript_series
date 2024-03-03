let mydate = new Date();
console.log(mydate.toDateString()); //Output : Today Date
console.log(mydate.toISOString()); //Output: 2024-03-03T09:21:25.211Z
console.log(mydate.toJSON()); //Output: 2024-03-03T09:21:25.211Z
console.log(mydate.toLocaleString()); //Output: 3/3/2024, 9:21:25 AM
console.log(mydate.toUTCString()); //Output: Sun, 03 Mar 2024 09:21:25 GMT

let createDate = new Date(2023, 0, 24); //Injavascript the month starts from 0 which is january
console.log(createDate.toDateString()); //Output: Tue Jan 24 2023

let newDate = new Date(2023, 0, 24, 3, 5);
console.log(newDate.toDateString()); //Output: Tue Jan 24 2023
console.log(newDate.toLocaleString()); //Output: 1/24/2023, 3:05:00 AM

let date2 = new Date(2023-0-24);
console.log(date2.toLocaleString()); //Output: 1/1/1970, 12:00:01 AM

let date3 = new Date("1-23-2023");
console.log(date3.toLocaleString());
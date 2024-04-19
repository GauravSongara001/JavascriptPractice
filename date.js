// 24 January 2023: 

// Date and Time Methods: 

// const date = new Date();

// console.log(date);
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// console.log(Date.now());


// Create a Date object for the date: Feb 20, 2012, 3:12am.

const newDate = new Date(2012, 1, 20, 3, 12);
// console.log(newDate);


// Write a function getWeekDay(date) to show the weekday in short format: 
//     'MO', ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let daysArr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

function getWeekDay(date) {
    const day = date.getDay();
    
    return daysArr[day]
}

let date = new Date(2014, 0, 3)
console.log(getWeekDay(date));
// 24 January 2023

// Function Exercises: 

// Write a JavaScript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case

const upperCase = (str) => {
    let arr = str.split(" ");
    let newArr = [];

    arr.forEach(element => {
       newArr.push(element[0].toUpperCase() + element.slice(1));
    });

    let newStr = newArr.join(" ");
    return newStr;
}

// let str = "hello i am gaurav songara";
// console.log(upperCase(str));


// Write a JavaScript function that accepts a string as a parameter and counts 
// the number of vowels within the string.

const countVowel = (str) => {
    let count = 0;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) != -1) {
            count++;
        }
    }
    return count;
}

// let myStr = "Hello I am a Node Js Intern";
// console.log(countVowel(myStr));



// Write a JavaScript function which will take an array of numbers stored and 
// find the second lowest and second greatest numbers: 

const secondLowGreat = (arr) => {
    arr = arr.sort((a,b) => a-b);
    return "Second Lowest: " + arr[1] + "\nSecond Largest: " + arr[arr.length - 2]
}

let arr = [23, 45, 10, 5, 47, 100, 112];

// console.log(secondLowGreat(arr));


// Get Unique values from a string: 

let myStr = "thequickbrownfoxjumpsoverthelazydog";
let myArr = myStr.split("");
let newArr = [...new Set(myArr)];

console.log(newArr.join(""));
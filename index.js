// // => 23 January 2023 : 

// // Type Conversions: 

// var value = true;
// var value = String(value);

// var val1 = "6/3";
// var val1 = Number(val1)     // NaN : number
// var val1 = parseInt(val1)   // 6 : number

// var val2 = "hello";     // true
// var val3 = "";          // false for "", 0, null, undefined.
// var val3 = Boolean(val3);

// // console.log(typeof(val3));
// // console.log(val3);


// //Arrays

// // slice method: 

// // let dummyArr = [1,2,4,3,6,7];

// // let newArr = dummyArr.slice(0,4)
// // let newArr = dummyArr.slice(Math.max(dummyArr.length - 4 , 0))

// // console.log(newArr);



// // clone an array:

// // const arr = [1,3,4,5];
// // const cloned = new Array();

// // arr.forEach((elem) => {
// //     cloned.push(elem);
// // })

// // console.log(cloned);



// // function to get the first element of an array. 
// // Passing a parameter 'n' will return the first 'n' elements of the array.

// // const first = (arr, n) => {
// //     if (n == null) {
// //         return arr[0];
// //     } 
// //     else if(n < 0) {
// //         return "No elements";
// //     } else if(n > 0) {
// //         return arr.slice(0, n)
// //     }    
// // }

// // var arr = ["Gaurav", "Yukti", "Harsh", "Anushka"];

// // console.log(first(arr, 4));



// // function to get the last element of an array. 
// // Passing a parameter 'n' will return the last 'n' elements of the array

// // const last = (arr, n) => {
// //     if (n == null) {
// //         return arr[arr.length - 1];
// //     } 
// //     else if (n < 0) {
// //         return [];
// //     }
// //     else if (n > 0) {
// //         return arr.slice(Math.max(arr.length - n, 0))
// //     }
// // }

// // let arr = ["Gaurav", "Yukti", "Harsh", "Anushka"];

// // console.log(last(arr, 2)); 



// // Write a simple JavaScript program to join all elements of the following array into a string

// // var arr = ["Gaurav", "Yukti", "Harsh", "Anushka"];

// // var str = arr.join(", ");

// // console.log(str);


// // Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// // function evenDash(num) {
// //     let str = num.toString();
// //     let res = [str[0]];

// //     for (let i = 1; i < str.length; i++) {
// //         if (str[i-1]%2 === 0 && str[i]%2 === 0) {
// //             res.push('-', str[i]);
// //         }        
// //         else {
// //             res.push(str[i])
// //         }
// //     }

// //     console.log(res.join(""));
// // }

// // let num = 3456488;

// // evenDash(num);




// // Write a JavaScript program to find the most frequent item of an array.

// // var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // var count = 0;
// // var maxCount = 1;
// // var item;

// // for (let i = 1; i < arr1.length; i++) {
// //     for (let k = 0; k < arr1.length; k++) {
// //         if (arr1[i] == arr1[k]) {
// //             count++;
// //         } 
// //         if (count > maxCount) {
// //             maxCount = count;
// //             item = arr1[i];
// //         }   
// //     }
// //     count = 0;
// // }

// // console.log(`${item} (${maxCount} times)`);




// // Write a JavaScript program to remove duplicate items from an array:

// // var arr = [1,2,3,5,3,1,7,123,5];
// // var newArr = arr.sort((a,b) => a-b);

// // for (let i = 1; i < newArr.length; i++) {
// //     if (newArr[i] == newArr[i-1]) {
// //         newArr.splice(i, 1);
// //     }
// // }

// // console.log(newArr);

// // OR

// // const uniqueArr = arr => [... new Set(arr)];
// // console.log(uniqueArr(arr));



// // Write a JavaScript program to find the leap years in a given range of years

// // function leapYear(years) {
// //     const res = [];

// //     for (let i = 0; i < years.length; i++) {
// //         if ((years[i] % 4 == 0 && years[i] % 100 != 0) || years[i] % 400 == 0) {
// //             res.push(years[i]);
// //         } 
// //     }
// //     return res;
// // }

// // let years = [2024, 2017, 2016, 2019, 2020, 2025];

// // console.log(leapYear(years));



// // There are two arrays with individual values, 
// // write a JavaScript program to compute the sum of each individual index value from the given arrays. 


// function arrSum(arr1, arr2) {
//     let res = [];

//     for (let i = 0; i < arr1.length; i++) {
//         res.push(arr1[i] + arr2[i]);
//     }

//     return res;
// }

// var arr1 = [1,12,3,5,3];
// var arr2 = [3,5,23,1,5];

// console.log(arrSum(arr1,arr2));



// // Find the sum of squares of a numeric vector:

// // let arr = [1,3,4,6];
// // let sum = 0;

// // const squareArr = arr.map((elem) => {
// //     return elem*elem;
// // })

// // squareArr.forEach(element => {
// //     sum += element;
// // });

// // console.log(sum);



// // Flatten an array: 

// // Two methods: flat(depth) and flatMap((element) => element.flat(depth))

// // const arr2 = [[[1, 2], 3, 4, 5]] ;

// // console.log(arr2.flat(2));

// // console.log(arr2.flatMap((elem) => elem.flat(2)));



// // => 24 January 2023 :

// // String methods: 

// var str = "Hello I am Gaurav Songara, my first name is Gaurav";

// // console.log(str.charAt(6));

// // for (const character of str) {
// //     console.log(character);
// // }

// // console.log(str.toLowerCase());
// // console.log(str.toUpperCase());

// // let newStr = str.replace(/GaUrav/i, "Yukti");
// // console.log(newStr);

// // str = str.replace(/Gaurav/g,"Yukti");
// // console.log(str);

// // UpperCase the first letter of a String:

// // function ucFirst(str) {
// //     return str[0].toUpperCase() + str.slice(1);
// // }

// // console.log(ucFirst('hello'));


// // Check for Spam Characters like ddd, rere, etc:

// // function checkSpam(str, spamChar) {
// //     let lowerStr = str.toLowerCase();

// //     for (let i = 0; i < spamChar.length; i++) {
// //         if (lowerStr.includes(spamChar[i].toLowerCase())) {
// //             var res = true
// //         } else {
// //             res = false;
// //         }
// //     }
// //     return res;
// // }

// // let spamChar = ['ccc', 'xxxx', 'DaDA'];

// // let str = "The Boy is going Goa";

// // console.log(checkSpam(str, spamChar));



// // Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…"

// // function truncate(str, maxlength) {
// //     if (str.length > 20) {
// //         return str.slice(0, maxlength+1) + "..." 
// //     }
// // }

// // let str = "Hello I am Gaurav Songara and I am working in Aliter Business Solutions";
// // let maxlength = 20;
// // console.log(truncate(str, maxlength)); 



// // Objects: 

// let obj = [
//     {
//         name: "Gaurav Songara",
//         age: 21,
//         gender: "male",
//     },
//     {
//         name: "Yukti Songara",
//         age: 25,
//         gender: "female"
//     }
// ]

// // console.log(obj[1].name);
// // console.log(obj[1].age);
// // console.log(obj[1].gender);




// var user = {
//     name: "Gaurav Songara",
//     age: 21,
//     gender: "male",
// }

// // let key = "name";


// // in operator:

// // console.log(key in user);


// // for in loop: 

// // for (const key in user) {
// //     console.log(key);
// //     console.log(user[key]);
// // }


// // Write the code to sum all marks and store in the variable 

// let marks = {
//     Gaurav: 100,
//     Ashwin: 50, 
//     Anushka: 95 
// }

// var sum = 0;
// for (const key in marks) {
//     sum = sum + marks[key]
// }

// // console.log(sum);


// // Create a function that multiplies all numeric property values of obj by 2

// function multiplyValue(obj) {
//     for (const key in obj) {
//         if (typeof(obj[key]) == 'number') {
//            obj[key] *= 2;
//         }
//     }
//     return obj;
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }

// // console.log(multiplyValue(menu)); 



// let myObj = {
//     name: "Gaurav",
//     age: 21,
//     greet: function () {
//         console.log(`hiii ${this.name}`);
//     },
//     marks: {
//         science: 90,
//         maths: 99,
//         physics: 95
//     }
// }

// // myObj.greet();
// // console.log(myObj.marks.science);


// // Create Multiple Objects with Constructor Function

// function person() {
//     this.name = "Gaurav";
//     this.age = 21;
// }

// let person1 = new person();
// let person2 = new person();

// person1.gender = "male";
// person2.name = "Yukti";
// person2.gender = "Female" 

// person1.greet = function () {
//     return `Hello ${this.name}`
// }

// // console.log(person2.greet());
// // console.log(person2);


// // Object Methods: 

// var user = {
//     name: "Gaurav Songara",
//     age: 21,
//     gender: "male",
// }

// // console.log(Object.keys(user));
// // console.log(Object.values(user));
// // let arr = Object.entries(user);
// // console.log(Object.fromEntries(arr));



// // Write the function sumSalaries(salaries) that returns the sum of all salaries 
// // using Object.values

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Harry": 200
// };

// function sumOfSalaries(obj) {
//     var sum = 0;
//     let salary = Object.values(obj);

//     for (const elem of salary) {
//         sum += elem;
//     }
//     return sum;
// }

// // console.log(sumOfSalaries(salaries)); 



// // Write a function count(obj) that returns the number of properties in the object:

// function countProperty(obj) {
//     let arr = Object.entries(obj);
//     return arr.length;
// }

// // console.log(countProperty(salaries));



// // setTimeout(): 

// // let greet = setTimeout(() => {
// //     console.log("Hello");
// // }, 2000);



// // setInterval(): 

// // var count = 0;

// // let sayHello = setInterval(() => {
// //     count++;

// //     if (count == 5) {
// //         clearInterval(sayHello);
// //     }

// //     console.log("hello");
// // }, 1000);



// // promise: 

// // let count = false;

// // let promise = new Promise((resolve, reject) => {
// //     if (count) {
// //         resolve("The count has some value");
// //     } else {
// //         reject("The count is empty");
// //     }
// // })

// // promise.then(res => console.log(res))
// // .catch(err => console.log(err))



// // JSON: 

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
// }

// let jsonVal = JSON.stringify(student);
// // console.log(jsonVal);

// let objectVal = JSON.parse(jsonVal);
// // console.log(objectVal);


// // Rest Parameter:

// const sumOfArgs = (...args) => {
//     var sum = 0;

//     for (const items of args) {
//         sum += items;
//     }
//     return sum;
// }

// // console.log(sumOfArgs(1,2,3,4));


// // Spead Operator:

// const arr = [400, 50, 900, 560, 200, 10, 55];
// const arr1 = ["Gaurav", "Harsh", "Yukti"];

// // console.log(Math.max(...arr));

// let newArr = [...arr, ...arr1];
// // console.log(newArr);



// // function Closure :

// function myFun(a,b) {
//     let sum = a + b;

//     function myFunToo() {
//         let c = sum * 10;
//         return c;
//     }

//     // console.log(c); // Undefined

//     return myFunToo();
// }

// // console.log(myFun(10,10));


// // Function Currying:

// let mySum = (a) => {
//     return function (b) {
//         return a + b;
//     }
// }

// // console.log(mySum(5)(6));


// // Filter method in Array: 

// let myArr = [1,2,3,4,5,6,7,8,9];

// var res = myArr.filter((items) => {
//     return items > 3 && items < 7
// })

// // console.log(res);


// // 25 January 2023:

// // Function Closure Exercise:
// // Exercise 1: 

// function stringBuilder() {
//     let result = "";

//     const add = (characters) => {
//         result += characters;
//         return result;
//     }

//     return add;
// }

// const builder = stringBuilder();
// let text = builder("Hello ");
// text = builder("there ");
// text = builder("friend ");
// text = builder(":)");

// // console.log(text); 


// // Exercise 2:

// function createVendingMachine() {
//     const stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
//     let coins = 0;

//     const addCoin = () => {
//         coins += 25;

//         if (coins == 100) {
//             const randItem = stock[Math.floor(Math.random() * stock.length)];
//             coins = 0;
//             console.log(`You got some ${randItem}`);
//         }

//         if (coins < 100) {
//             const remainingCoins = 100 - coins;
//             console.log(`Insert ${remainingCoins} to get an Item`);
//         }
//     }

//     return addCoin;
// }

// const vendingMachine = createVendingMachine();

// // vendingMachine()
// // vendingMachine()
// // vendingMachine()
// // vendingMachine()
// // vendingMachine()


// // Javascript Map:

// // let map1 = new Map();

// // map1.set('info', {name: "Gaurav", age: 21});
// // map1.set('pass', {name: "Gaurav", pass: 2525});
// // map1.set('email', {name: "Gaurav", email: 'gaurav@gmail.com'});
// // console.log(map1);

// // console.log(map1.get('info'))        // access the items of map
// // console.log(map1.has('info'));       // checks if item is in Map
// // console.log(map1.clear());           // deletes every item of Map
// // console.log(map1.delete('email'));   // deletes specific item and returns a bool value
// // console.log(map1.size);



// // => 27 January 2023: 

// // Set() :

// // let set1 = new Set([]);

// // set1.add(1);

// // console.log(set1);

// // Duplicate elements are not added to the set array
// // set1.add(2);
// // set1.add(1);

// // console.log(set1.values());
// // console.log(set1.has(3));

// // set1.clear();
// // set1.delete(1);

// // console.log(set1.values());


// // Iterate through elements of a Set: 

// // for (const item of set1) {
// //     console.log(item);
// // }

// // set1.forEach(item => {
// //     console.log(item);
// // });


// // Exercise 1: Perform Union of two Sets:

// function union(set1, set2) {
//     let res = new Set(set1);

//     for (const item of set2) {
//         res.add(item);
//     }

//     return res.values();
// }


// let set1 = new Set(['mango', 'orange', 'Bananna']);
// let set2 = new Set(['apple', 'grapes', 'Bananna']);

// // console.log(union(set1, set2));


// // Exercise 2: Perform Intersection on two sets: 

// function intersection(a,b) {
//     let res = new Set();

//     for (const i of a) {
//         if (b.has(i)) {
//             res.add(i)
//         }
//     }

//     return res;
// }

// // let mySet1 = new Set(['mango', 'orange', 'Bananna']);
// // let mySet2 = new Set(['apple', 'grapes', 'Bananna']);

// // console.log(intersection(mySet1, mySet2));


// // Exercise 3: Find the elements of set a that are not in set b

// function diff(a,b) {
//     let res = new Set();

//     for (const i of a) {
//         if (!b.has(i)) {
//             res.add(i)
//         }
//     }

//     return res;
// }

// // let mySet1 = new Set(['mango', 'orange', 'Bananna']);
// // let mySet2 = new Set(['apple', 'grapes', 'Bananna']);

// // console.log(diff(mySet1, mySet2));


// // Exercise 4: Subset Operation:

// // function subset(a,b) {
// //     var res;
// //     for (const item of a) {
// //         if (b.has(item)) {
// //             res = true;
// //         } else {
// //             res = false;
// //         }
// //     }

// //     return res
// // }

// // let mySet1 = new Set(['mango', 'orange', 'Bananna']);
// // let mySet2 = new Set(['Apple','orange']);

// // console.log(subset(mySet1,mySet2));


// let arr = [4,3, 2, 5, 3, 1]
// let sum = 10;


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     for (let j = i+1; j < arr.length; j++) {
//         const elem = arr[j];

//         if (element + elem == sum) {
//             console.log(`Pair found: (${element}, ${elem})`);
//             return;
//         }
//     }
    
// }



// debouncing a function : making a function to be executed after a delay or specific interval

// function printName() {
//     console.log("HELLLLLLO GAURAV");
// }


// setTimeout(printName, 2000);




// deep clone:    create a copy of an object without reference problem 

// To do this we need to first stringify the object and then parse it again to remove referencing
  
let obj = {
    name: "Gaurav",
    age: 22
}


function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let newObj = deepClone(obj);
console.log('newObj: ', newObj);


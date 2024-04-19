// // const array = [
// //     { type: 1, values: 'a' },
// //     { type: 2, values: 'd' },
// //     { type: 1, values: ['b', 'c'] },

// // ];

// // const result = [];

// // array.forEach((object) => {

// //     console.log("object....", object);

// //     console.log("result...", result);

// //     const existing = result.filter((item) => item.type == object.type);

// //     console.log("existing...", existing);
// //     if (existing.length) {
// //         const existingIndex = result.indexOf(existing[0]);
// //         result[existingIndex].values = result[existingIndex].values.concat(object.values);
// //     } else {
// //         if (typeof object.values == 'string') object.values = [object.values];
// //         result.push(object);
// //     }
// // });

// // console.log(JSON.stringify(result));

// let arr = [0, -1, 1, -1, -6, 1]


// function plusMinus(arr) {
//     // Write your code here
//     let pos = 0, neg = 0, zero = 0;
//     let res = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             neg++;
//         } 
//         else if(arr[i] > 0) {
//             pos++;
//         } 
//         else {
//             zero++;
//         }
//     }
    
//     let nratio = neg / arr.length;
//     let posratio = pos / arr.length;
//     let zratio = zero / arr.length;

//     res = [nratio, posratio, zratio]
    
//     return res;
// }


// console.log(plusMinus(arr));

// var moment = require('moment');

// let date  = new Date(Date.now());

// let nowDate =  (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
// let firstDate = (date.getMonth() + 1) + "-" +  "01" + "-" + date.getFullYear();

// let date1 = new Date(nowDate)
// let date2 = new Date(firstDate)

// console.log(moment(date1).format("DD-MM-YYYY"));
// console.log(moment(date2).format("DD-MM-YYYY"));



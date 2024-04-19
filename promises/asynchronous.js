// 25 January 2023:

// Callback function example: 

// let movies = [
//     {title: "Fast and Furious"},
//     {title: "Incidious"}
// ];

// function getMovies() {
//     setTimeout(() => {
//         movies.forEach((movie, index) => {
//             console.log(movie.title);
//         })
//     }, 1000)
// }


// function createMovie(movie, callback) {
//     setTimeout(() => {
//         movies.push(movie);
//         callback();
//     }, 2000);
// }

// createMovie({title: "Conjuring"}, getMovies);


// Promise Example 1:

let movies = [
    {title: "Fast and Furious"},
    {title: "Incidious"}
];

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title);
        })
    }, 1000)
}

function createMovie(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            movies.push(movie);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Something went wrong");
            }
        }, 2000);
    })
}

// createMovie({title: "Conjuring"})
// .then(getMovies)


// Promise Example 2: 
// task: 1> Display a roll number from API after 2 seconds,
// 2> Display the name from a random roll number after 2 seconds,
// 3> again Convert it to async-await format

const obj = new Promise((resolve, reject) => {

    setTimeout(() => {
        let rollNo = [1,2,3,4,5,6];
        resolve(rollNo);
        reject("Error while fetching data from API");
    }, 2000)
})

const getBioData = (rollno) => {
    return new Promise((resolve, reject) => {
        setTimeout((rollno) => {
            const bioData = {
                name: "Gaurav", 
                age:21
            }

            resolve(`Roll No: ${rollno}\nName: ${bioData.name}\nAge: ${bioData.age}`);
            reject("Bio Data not found")
        }, 2000, rollno[1])
    })
}

// obj.then((res) => {
//     return getBioData(res)
// })
// .then((res) => console.log(res))
// .catch((error) => console.log(error))

async function getData() {
    try {
        const rollnodata = await obj;
        console.log(rollnodata);

        const userData = await getBioData(rollnodata);
        console.log(userData);

    } catch (error) {
        console.log(error);
    }
}

// getData();


// Promise Example 3: 

const myTask2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello world");
        reject("Error")
    }, 2000)
})

// job.then((res) => {
// console.log(res);
// })
// .catch((error) => console.log(error))



// Promise Example 4: 

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even"

function myTask(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("Data is not a number")
        }
        if (data%2 != 0) {
            setTimeout(() => {
                resolve("Odd");
            }, 1000)
        } else {
            setTimeout(() => {
                reject("Even")
            }, 3000)
        }
    })
}

// myTask(1).then(res => console.log(res))
// .catch(error => console.log(error))



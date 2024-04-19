// var crypto = require('crypto');

// const hash = crypto.createHmac('sha256', 'iamgaurav');

// let msg = hash.update('hello this is gaurav')

// let digest = msg.digest('hex')

// console.log("DIGEST:::   ", digest);

// let buf = crypto.randomBytes(32);

// console.log("RANDOM BUFFER:::", buf.toString('hex'));


// const key  = crypto.scryptSync("Gaurav@123", 'salt', 32);

// console.log("KEY::: ", key.toString('hex'));

// // console.log(digest);


var crypto = require('crypto');

let algorithm = 'aes-256-cbc';
let password = 'gaurav@123'
const key = crypto.scryptSync(password, 'salt', 32);
let iv = Buffer.alloc(16);


console.log("key:::    ", key);

let cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('hello I am sending secret message!!!', 'utf8', 'hex');

encrypted += cipher.final('hex')

console.log("cipher:::      ", encrypted);


let decipher = crypto.createDecipheriv(algorithm, key, iv);
let dexrypted = decipher.update(encrypted, 'hex', 'utf-8');

dexrypted += decipher.final('utf8')

console.log("dexrypted:::     ", dexrypted);
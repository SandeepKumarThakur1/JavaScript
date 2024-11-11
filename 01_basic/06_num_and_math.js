const score = 400;
// console.log(score);

const accountNumber = new Number(5421785421554n);
// console.log(accountNumber)

// console.log(accountNumber.toString().length)
// console.log(accountNumber.toFixed(2))

const otherNumber = 542.6512
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-US'));


// -------------------------- MATHS -------------------------------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(45.5))
console.log(Math.ceil(45.2))
console.log(Math.floor(45.9))
console.log(Math.max(1, 5, 3, 6))
console.log(Math.min(1, 5, 3, 6))

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// const nameList = []; - truthy
const nameList = ""; // - Falsy

if (nameList) {
    console.log("Got user email")
} else {
    console.log("Don't have user email");
}

// Falsy Values
// false, "" , BigInt 0n, 0, -0, null, undefined, NaN

// Truthy Values
// 'false', " ", "0", {}, [], Function(){} , all are truthy values exept falsy.


// How to find empty Array by condition?
const empty = []
if (empty.length === 0) {
    console.log("Array is empty")
}

// How to find empty Object by condition?
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}

// False == 0  -> true
// False == "" -> true
// 0 == "" -> true


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
val1 = null ?? 10 ?? 20;

console.log(val1)


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
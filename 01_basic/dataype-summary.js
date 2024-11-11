// On the basis of how to store and how to access the data. The DataType divided into two type.

// # Primitive dataType -> call by value
//  7 type : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const value = "Ram"
const numValue = 33
const scoreValue = 33.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const BigNumber = 542151785421n


// Reference DataType [Non-Primitive] -> call by Reference
// 3 type : Array, Object, Function

const movieNames = ["Roy", "Tamasha", "Animal"]

const myObj = {
    name: 'Ram',
    age: 22
}

const myFun = function () {
    console.log('Hello World')
}

console.log(typeof myFun)

// Typeof Operator Results

// 1. String => String
// 2. Number => Number
// 3. Boolean => Boolean
// 4. Null => Object
// 5. Undefined => Undefined
// 6. Symbol => Symbol
// 7. BigInt => BigInt
// 8. Object => Object
// 9. Array => Object
// 10. Function => Function Object
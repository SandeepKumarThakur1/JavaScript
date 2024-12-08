let score = "33abc"
let changeInNum = Number(score)
// console.log(typeof changeInNum);
// console.log(changeInNum);

// "33" ==> 33
// "33abc"  ==> NaN


let userLoggedIn = "afdsaf"
let changeInBoolean = Boolean(userLoggedIn);
// console.log(typeof changeInBoolean);
// console.log(changeInBoolean);

// "" ==> false
// 1 ==> true
// 0 ==> false
// "xyz" ==> true


let userValue = null
let changeInString = String(userValue);
// console.log(typeof changeInString)
// console.log(changeInString)


// ******************************* Operater *********************************

let value = 33
let negValue = (-value)
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3);
// console.log(2 % 5);

// console.log("1 " + 1); - 11
// console.log(1 + " 1"); - 11
// console.log("1 " + 1 + 1); - 111
// console.log(1 + 1 + "1"); - 21

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter)


// Prefix and postfix
// ==> Prefix increments the value before using it, while postfix increments the value after using it.

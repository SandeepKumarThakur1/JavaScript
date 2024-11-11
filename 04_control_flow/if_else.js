// if 

if (true) {
    console.log("ram")
}

const isUserLogin = true

if (isUserLogin) {
    const power = 45;
    console.log(`The power is ${power}`)
}

// console.log(power) -- Error

if (2 == 2) console.log('Go to console');


const isLoginByGoogle = true;
const isLoginByGmail = true;

if (isLoginByGmail || isLoginByGoogle) {
    console.log('Login User')
}

const isLoginUser = true;
const isCreditCard = true;

if (isLoginUser && isCreditCard) {
    console.log("Make Payment Done")
}

// if else

const balance = 1000;

if (balance < 500) {
    console.log("below 500")
}
else {
    console.log("above 500")
}
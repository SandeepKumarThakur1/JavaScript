// JavaScript me, Promise ek object hai jo asynchronous operation ko handle karne ke liye use hota hai. Yeh ek tarike ka placeholder hota hai jo future me asynchronous task ka result return karega. Ek promise teen states me ho sakta hai:

// Pending - Jab promise abhi process ho raha hai.
// Fulfilled - Jab asynchronous operation successfully complete ho gaya hai aur ek result provide karta hai.
// Rejected - Jab operation fail ho jata hai aur ek error return karta hai.

// Promise ek "vaada" ki tarah kaam karta hai jo future me kuch hone ka ashwasan deta hai.
// Agar operation successful hota hai, to resolve() function call hota hai.
// Agar operation fail hota hai, to reject() function call hota hai.
// .then() ka use successful result handle karne ke liye hota hai.
// .catch() ka use error handle karne ke liye hota hai.
// Yeh Promises asynchronous tasks, jaise ki API calls ya file handling, ke liye kaafi useful hote hain.

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task')
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("promise Consumed ")
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task2')
        resolve()
    }, 1000);
}).then(function () {
    console.log("promise Consumed2")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: 'sandeep', Age: '21' })
    }, 1000);
}).then(function (user) {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'Sandeep', Age: 21 })
        } else {
            reject('Error : Something Went Wrong')
        }
    }, 1000);
}).then(function (user) {
    console.log(user)
    return user.userName
}).then(function (userName) {
    console.log(userName)
}).catch(function (err) {
    console.log(err)
}).finally(function () {
    console.log(`Finally`)
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'JavaScript', Password: 123 })
        } else {
            reject('Error : Something Js Wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

async function userData() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`This is a error`)
    }
}

userData()


fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log('Error'))
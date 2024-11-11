// Singleton
// Object.create

// Object Litreals
const mySym = Symbol('key1')

const JsUser = {
    name: 'Sandeep',
    'Full name': 'Sandeep Kumar',
    [mySym]: 'KeysOfSym',
    age: 18,
    location: 'Chandigarh',
    email: 'sandeepkumar@google.com',
    isLoggedIn: false,
    lastLoginDay: ['Monday', 'Tuesday', 'Saturday']
}

// console.log(JsUser.name);
// console.log(JsUser['name']);
// console.log(JsUser['Full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'sandeepkumar@chatGPT.com'
// Object.freeze(JsUser) // Not any change in object
JsUser.email = 'sandeepkumar@gmail.com'

// console.log(JsUser);

JsUser.greeting = function () {
    console.log('Hello JS User')
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())
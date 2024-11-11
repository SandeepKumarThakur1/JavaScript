// const tinderUser = new Object() --> SingleTon

const TinderApp = {} // non SingleTon
TinderApp.id = '123abc',
    TinderApp.email = 'laptop@gmail.com'
// console.log(TinderApp.id)

const regUser = {
    email: 'some@gmail.com',
    userName: {
        fullName: {
            firstName: 'Sandeep',
            lastName: 'Kumar'
        }
    }
}

// console.log(regUser.userName.fullName.firstName);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }

// const all_Obj = { obj1, obj2 }
// const all_Obj = Object.assign({}, obj1, obj2)
const all_Obj = { ...obj1, ...obj2 }
// console.log(all_Obj)

console.log(obj1.hasOwnProperty('name'))
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

const inside_array_obj = [
    {
        name: "ram",
        email: "ram@gmail.com"
    },
    {
        name: "sita",
        email: "sita@gmail.com"
    },
    {
        name: "mohan",
        email: "mohan@gmail.com"
    }
]

console.log(inside_array_obj[0].email)
console.log(inside_array_obj)
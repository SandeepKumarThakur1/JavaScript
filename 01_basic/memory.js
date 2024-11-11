// How to Store Data in javaScript?
// => In Stack and Heap Memory to story data in javaScript.

let myInstagramId = "sandeepkumar988";
let anotherId = myInstagramId
anotherId = "lucktaneja988"

// console.log(myInstagramId)
// console.log(anotherId)

const User1 = {
    user: 'Ram',
    email: 'user@gmail.com'
}

const User2 = User1
User2.user = 'Mohan'

console.log(User1)
console.log(User2)
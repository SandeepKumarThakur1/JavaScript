const user = {
    username: 'Sandeep',
    email: 'user@gmail.com',
    welcomemessage: function () {
        console.log(`${this.username}, welcome to our website.`)
    }
}

// console.log(user)
// user.welcomemessage()
// user.username = 'Ram'
// user.welcomemessage()
// console.log(this)

// function chai() {
//     let username = 'sandeep';
//     console.log(this)
// }
// chai()

const chai1 = function () {
    console.log(this)
}
chai1()

// let chai = () => {
//     console.log(this)
// }
// chai()

let chai = (num1, num2) => (num1, num2)
let chai2 = () => ({ username: 'sandeep' })

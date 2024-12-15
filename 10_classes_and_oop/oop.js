// Object literal
const user = {
    username: 'Ram',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log('Got User Details database')
        // console.log(`UserName: ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// Constructor Function
function userInfo(username, loginCount, IsLogin) {
    this.username = username // this.username is a variable.
    this.loginCount = loginCount
    this.IsLogin = IsLogin

    this.greating = function userHello() {
        console, log('HELLO')
    }

    return this;
}

const userOne = new userInfo('Sandeep', 21, true) // new keyword create new Instances.
const userTwo = new userInfo('Rahul', 12, false)
console.log(userOne)
console.log(userTwo)
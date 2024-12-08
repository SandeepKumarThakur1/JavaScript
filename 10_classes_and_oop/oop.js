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
console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

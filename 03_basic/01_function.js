function myFun() {
    console.log('h')
    console.log('h')
    console.log('h')
}

// myFun() --> reference
// myFun()


function addTwoNumber(number1, number2) {
    // console.log(number1 + number2)
    // return number1 + number2
    let result = number1 + number2
    return result
}

// addTwoNumber(2, 2)
const allResult = addTwoNumber(2, 2)
console.log(allResult)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log('Plaase enter user name first')
        return
    }
    return `${username} just Logged In`
}
console.log(loginUserMessage())
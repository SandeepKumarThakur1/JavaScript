// Rest operaters
function calculateCartPrice(...numb1) {
    return numb1
}
console.log(calculateCartPrice(100, 200, 300, 400))

const user = {
    username: 'raj',
    price: 1999
}

function handleObject(anyObject) {
    return `The User Name is ${anyObject.username} and the price of item is ${anyObject.price}`
}
// console.log(handleObject(user))
console.log(handleObject({
    username: 'Kumar',
    price: 1999
}))


const myNewArray = [200, 400, 500, 600]
function arrayHandle(getArray) {
    return getArray[1]
}

// console.log(arrayHandle(myNewArray))
console.log(arrayHandle([200, 400, 500, 600]))
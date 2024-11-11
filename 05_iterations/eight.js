// Reduce

const myNums = [1, 2, 3]

const totalNums = myNums.reduce((acc, currval) => {
    // console.log(`Acc : ${acc} and CurVal : ${currval}`)
    return acc + currval
}, 3)
// console.log(totalNums)

const shoppingBag = [
    {
        itemName: 'js course',
        price: 3000
    },
    {
        itemName: 'java',
        price: 4000
    },
    {
        itemName: 'python',
        price: 5000
    },
]

// const totalPrice = shoppingBag.reduce((acc, item) => {
//     console.log(`Acc : ${acc} and Price : ${item}`)
//     return acc + item.price
// }, 0)
// console.log(totalPrice)

const totalPrice = shoppingBag.reduce((acc, item) => acc + item.price, 0)
console.log(`The Total Cart Price is - ${totalPrice})`)




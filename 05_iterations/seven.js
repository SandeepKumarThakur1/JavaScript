// Map 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 89, 10]
// const newNums = myNumber.map((items) => items + 10)

const newNums = myNumber
    .map((items) => items * 10)
    .map((items) => items + 1)
    .filter((items) => items >= 40)

console.log(newNums)
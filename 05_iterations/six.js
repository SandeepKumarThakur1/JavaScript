// const coding = ["javaScipt", "java", "cpp", "python"]

// let newAdd = coding.forEach((items) => {
//     console.log(items)
//     return items
// })
// console.log(newAdd)


// Filter
const coding = ["javaScipt", "java", "cpp", "python"]
let newCode = coding.filter((items) => {
    // console.log(items)
    return items
})
// console.log(newCode);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
const newNums = myNums.filter((num) => {
    return num
})

// console.log(newNums)


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumber = []
myNumber.forEach((num) => {
    if (num > 4) {
        newNumber.push(num)
    }
})

// console.log(newNumber)


const book = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1881, edition: 2008 },
    { title: 'Book three', genre: 'Fiction', publish: 1982, edition: 2004 },
    { title: 'Book four', genre: 'History', publish: 1981, edition: 2002 },
    { title: 'Book five', genre: 'Non-Fiction', publish: 1781, edition: 2010 },
    { title: 'Book six', genre: 'Non-Fiction', publish: 1682, edition: 20012 },
]

// const userBook = book.filter((allbookInfo) => allbookInfo.genre === 'History')
const userBook = book.filter((allbookInfo) => {
    return allbookInfo.edition >= 2005 && allbookInfo.publish >= 1800
})
console.log(userBook)

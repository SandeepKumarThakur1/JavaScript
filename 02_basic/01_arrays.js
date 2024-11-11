// Array 

const myArr2 = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArr2)

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)
// console.log(myArr[0])
// console.log(myArr.length)

// Array Method

// myArr.push(6)
// myArr.pop()
// myArr.unshift("sandeep")
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))  //find index of number whenever no is not found then they give as result -1
// console.log(myArr)

const newArray = myArr.join()
// console.log(newArray)

const mainArr = [1, 2, 3, 4, 5, 6]
console.log('A ', mainArr)

const myNum1 = mainArr.slice(1, 3)
console.log('B ', myNum1)
console.log(mainArr)

const myNum2 = mainArr.splice(1, 3)
console.log('C  ', myNum2)
console.log(mainArr)
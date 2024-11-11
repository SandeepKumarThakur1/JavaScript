const date = new Date()
// console.log(typeof date)
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toTimeString())
// console.log(date.toUTCString())

const myCreatedDate = new Date(2005, 2, 25)
// console.log(myCreatedDate.toDateString())

const myCreatedDate2 = new Date(2005, 2, 25, 5, 2)
// console.log(myCreatedDate2.toLocaleString())

const myCreatedDate3 = new Date("01-02-2005")
// console.log(myCreatedDate3.toLocaleString())

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(newDate.getTime())

// To customsize toLocalString
newDate.toLocaleString('default', {
    weekday: "long"
})

let myTimeStamp = Date.now()
console.log(myTimeStamp)

// To convert in ms to second in time
console.log(Date.now() / 1000)
console.log(Math.floor(Date.now() / 1000))

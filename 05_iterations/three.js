// For of Loop

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
    // console.log(num)
}

const greeting = 'Hello World';
for (const greet of greeting) {
    // if (greet == ' ') {
    //     continue
    // }
    // console.log(greet)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map)

for (const [key, value] of map) {
    console.log(key, value)
}
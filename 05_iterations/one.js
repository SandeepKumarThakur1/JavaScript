// for Loop

for (let i = 0; i < 10; i++) {
    const element = i
    // console.log(element)
}

for (let j = 0; j <= 10; j++) {
    const element = j
    if (j == 5) {
        // console.log("5 is Great Number")
    }
    // console.log(j)
}


for (let k = 0; k < 10; k++) {
    // console.log(`Outer Loop is ${k}`);
    for (let r = 0; r < 10; r++) {
        // console.log(`Inner Loop ${r}`)
    }
}


for (let k = 1; k <= 10; k++) {
    // console.log(`Outer Loop is ${k}`);
    for (let r = 1; r <= 10; r++) {
        // console.log(k + "*" + r + "=" + k * r)
    }
}

const myArr = ["ram", "mohan", 45, "rohan"];
for (let a = 0; a < myArr.length; a++) {
    const element = myArr[a];
    // console.log(element)
}


// Break and Continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Find 5 Number`)
        // break
        continue
    }
    console.log(`The value of index is = ${index}`)
}
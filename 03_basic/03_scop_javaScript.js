if (true) {
    let a = 5;
    const b = 10;
    var c = 15;
}

console.log(a)
console.log(b)
console.log(c)

function one() {
    const username = 'sandeep'
    function two() {
        const website = 'YouTube'
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

function oneFun(num) {
    return num + 1
}
console.log(oneFun(2))


const twoFun = function (num) {
    return num + 1
}
console.log(twoFun(5))

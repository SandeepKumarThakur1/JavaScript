let userName = "Sandeep";
let userAge = 21;

// console.log(`The User Name is ${userName} and the User Age is ${userAge}.`)

const gameName = new String('Ra-One')
// console.log(gameName);
// console.log(typeof gameName);

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('O'))
console.log(gameName.substring(0, 4))
console.log(gameName.slice(-5, 4))
console.log(gameName.split('-'))
console.log(gameName.charCodeAt(1))

const newGame = '  RAONE  ';
// console.log(newGame)
// console.log(newGame.trim())

const url = 'https://sandeepkumar%20thakur';
// console.log(url.replace('%20', '-'))
// console.log(url.includes('sandeep'))

// Escaping Characters
// New Line: \n
// Tab: \t
// Backslash: \\
// Single Quote: \'
// Double Quote: \"
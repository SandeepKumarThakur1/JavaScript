const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][0])

let allHeros = marvel_heros.concat(dc_heros); // concat create a new array. So new array store in a new variables.
// console.log(allHeros)

let all_hero_name = [...marvel_heros, ...dc_heros]
// console.log(all_hero_name)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]]
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array)

console.log(Array.isArray(another_array)) // To find array is not.
console.log(Array.from('Sandeep')) // To Convert in Array.
console.log(Array.from({ name: 'sandeep' }))


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) // A set of elements to include in the new array object




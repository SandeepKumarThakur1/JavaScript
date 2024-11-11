// forEach Loop

const coding = ['java', 'cpp', 'ruby', 'python', 'javaScript']

coding.forEach(function (items) {
    // console.log(items);
})

coding.forEach((items) => {
    // console.log(items)
})

function printMe(items) {
    // console.log(items);
}
coding.forEach(printMe)

coding.forEach((items, index, arr) => {
    // console.log(items, index, arr)
})

const myCoding = [
    {
        languageName: 'javaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach((items) => {
    console.log(items.languageName)
})
// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named iife
    console.log('iife')
})();

((name) => {
    console.log(name)
})('ram')
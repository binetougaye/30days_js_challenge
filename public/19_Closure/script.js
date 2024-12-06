// Exercise Level 1
// Create a closure which has one inner function
function outerFunction() {
    function innerFunction(a, b) {
        return a * b
    }
    return innerFunction
}
const myFunction = outerFunction()
console.log(myFunction(3, 4));
// Exercise Level 2
// Create a closure which has three inner functions
function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        },
    };
}


const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());



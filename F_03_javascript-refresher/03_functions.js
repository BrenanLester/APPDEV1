function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Brenan"));


const square = (num) => {
    return num * num;
};

console.log(square(5));


function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(calculator(9, 9));
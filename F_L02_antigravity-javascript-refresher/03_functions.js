function greet(name) {
    return "Welcome, " + name + "!";
}

console.log(greet("Lester"));


const square = (val) => {
    return val * val;
};

console.log(square(7));


function calculator(x, y) {
    return {
        difference: x - y,
        quotient: x / y
    };
}

console.log(calculator(50, 10));
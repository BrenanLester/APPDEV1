if (true) {
  let message = "Hello from inside the block!";
  console.log(message);
}

try {
  console.log(message);
} catch (error) {
  console.log("Error:", error.message);
}



function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1()); 
console.log(counter1());

console.log(counter2());
console.log(counter2()); 
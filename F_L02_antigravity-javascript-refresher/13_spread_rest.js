const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
// [1, 2, 3, 4, 5]


const user = {
  name: "Brenan",
  age: 21
};

const newUser = {
  ...user,
  course: "Information Technology"
};

console.log(newUser);


function sum(...args) {
  return args.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4));
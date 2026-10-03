const grade = 75;

const result = grade >= 75 ? "Passed" : "Failed";

console.log(result);


const number = 8;

console.log(
  number % 2 === 0
    ? "The number is even."
    : "The number is odd."
);

const user = {
  name: "Brenan",
  address: {
    city: "Manila"
  },
  age: 0
};

console.log(user.address?.city);

const age = user.age ?? 18;

console.log(age);

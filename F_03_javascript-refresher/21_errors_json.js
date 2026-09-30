function divide(a, b) {
  if (b === 0) {
    throw new Error("Hindi siya pwede i divide sa zero.");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.log("Sorry, something went wrong:", error.message);
}

const user = {
  name: "Brenan",
  age: 21,
  course: "Information Systems"
};

const jsonString = JSON.stringify(user);

console.log(jsonString);

const parsedUser = JSON.parse(jsonString);

console.log(parsedUser.name);
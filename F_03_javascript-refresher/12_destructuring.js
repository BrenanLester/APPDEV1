const person = {
    name: "Brenan Lester Espeleta",
    age: 21,
    course: "BSIS"
};

const {name, age} = person;

console.log(name);
console.log(age);

const hobbies = ["Reading Animated Novels", "Playing Games", "Watching Dramas"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1);
console.log(hobby2);

function printName({ name}) {
    console.log(name);
}

printName(person);
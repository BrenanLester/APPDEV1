const hobbies = ["Reading Animated Novels", "Playing Games", "Watching Dramas"];

hobbies.map(hobby => {
    console.log(hobby);
});


const student = {
    name: "Brenan Lester Espeleta",
    age: 21
};

const { name, age } = student;

console.log(name);
console.log(age);


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
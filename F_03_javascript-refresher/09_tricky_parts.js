console.log(5 == 5);
console.log(5 === 5);

let noValue;
let emptyValue = null;

console.log(noValue);
console.log(emptyValue);

const aboutMe = {
    name: "Brenan",

    regularMethod: function() {
        console.log(this.name);
    },
    
    arrowMethod: () => {
        console.log(this.name); 
    }
}

aboutMe.regularMethod();
aboutMe.arrowMethod();

let hobbies = ["Reading Animated Novels", "Playing Games", "Coding"];

let copiedHobbies = hobbies;
copiedHobbies.push("Watching Movies");

console.log(hobbies);
console.log(copiedHobbies);


let spreadHobbies = [...hobbies];
spreadHobbies.push("Watching Movies");

console.log(hobbies);
console.log(spreadHobbies);
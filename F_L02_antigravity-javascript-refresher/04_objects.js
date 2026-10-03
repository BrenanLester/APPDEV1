const aboutMe = {
    name: "Brenan Espeleta",
    age: 22,
    course: "BSIT",
    introduce: function() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old, and currently pursuing ${this.course}.`);
    }
};

aboutMe.hobby = "Playing Video Games";

aboutMe.introduce();
console.log(`And I enjoy ${aboutMe.hobby} as my hobby.`);
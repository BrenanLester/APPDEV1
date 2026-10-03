const aboutMe = {
    name: "Brenan Lester Espeleta",
    age: 21,
    course: "BSIS",
    introduce: function() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I am taking up ${this.course}.`);
    }
};

aboutMe.hobby = "Reading Animated Novels";

aboutMe.introduce();
console.log(`And i like ${aboutMe.hobby} as my hobby.`);
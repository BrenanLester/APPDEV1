class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is playing instead of studying.`);
  }
}

const student = new Student("Brenan");

student.sayHello();
student.study();
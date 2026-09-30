const students = [
  { name: "Rimer", grade: 91 },
  { name: "Priya", grade: 85 },
  { name: "Winston", grade: 79 },
  { name: "Anthony", grade: 55 }
];

const passingStudents = students.filter(student => student.grade >= 60);
console.log("Passing students:", passingStudents);

const priya = students.find(student => student.name === "Priya");
console.log("Priya:", priya);

const someFailed = students.some(student => student.grade < 60);
console.log("Some student failed:", someFailed);

const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by grade:", sortedStudents);
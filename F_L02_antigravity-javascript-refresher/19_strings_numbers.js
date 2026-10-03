const fullName = "  Alice Rivera  ";

const cleanName = fullName.trim();

const [firstName, lastName] = cleanName.split(" ");

const upperFirstName = firstName.toUpperCase();

const hasRivera = cleanName.includes("Rivera");

console.log("First name:", upperFirstName);
console.log("Last name:", lastName);
console.log("Includes Rivera:", hasRivera);

const value = "42px";

const number = parseInt(value);
console.log(number);


const rounded = 19.9999.toFixed(2);
console.log(rounded);

const result = "abc" / 2;
console.log(result);
console.log(Number.isNaN(result));

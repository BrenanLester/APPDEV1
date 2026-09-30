import greet, { userInfo } from "./15_modules_export.js";

greet();

console.log(`Hello ${userInfo.name}, you are ${userInfo.age} years old.`);
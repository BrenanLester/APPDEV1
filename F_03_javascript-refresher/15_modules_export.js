function greet() {
  console.log("Hello! Welcome to the module export.js.");
}

const userInfo = {
  name: "Brenan",
  age: 21
};

export default greet;
export { userInfo };
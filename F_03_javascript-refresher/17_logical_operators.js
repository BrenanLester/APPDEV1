const values = [0, "", "hello", null, undefined, [], {}];

values.forEach(value => {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
});

const username = "Brenan";
const password = "12345";

const isAdmin = false;
const isSubscriber = true;

const login = username && password;

if (login) {
  console.log("Login successful!");
} else {
  console.log("Login failed!");
}

const canWatch = isAdmin || isSubscriber;

console.log("Can watch:", canWatch);

console.log("" || "default");

console.log(username && "Welcome!");

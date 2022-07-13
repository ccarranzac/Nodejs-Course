let name = "Max";
let age = 20;
let hasHobbies = true;

const sumUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", has hobbies: " +
    userHasHobby
  );
};

function sumarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", has hobbies: " +
    userHasHobby
  );
}

const add = (a, b) => a + b;
const addRandom = () => 1 + 2;

// console.log(sumarizeUser(name, age, hasHobbies));
// console.log(sumUser(name, age, hasHobbies));
// console.log(add(1, 2));
// console.log(addRandom());

const person = {
  name: "Max",
  age: 22,
  greet() {
    console.log("hi, i am " + this.name);
  },
};

console.log(person);
person.greet();

let hobbies = ["Sports", "Cooking"];
for (let item of hobbies) {
  console.log(item);
}

hobbies = hobbies.map((el) => "Hobby " + el);
console.log(hobbies);

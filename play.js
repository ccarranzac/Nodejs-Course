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

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

const printName = ({ name, age }) => {
  console.log(name);
  console.log(age);
};

printName(person);

const { name, age } = person;
console.log(name);

let [hobby1, hobby2] = hobbies;
console.log(hobby1);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

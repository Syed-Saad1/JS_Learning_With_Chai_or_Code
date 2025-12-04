// 👇 two types Declare Object

// 1 : Letiral
const mysym = Symbol("Key1");
const JSUser = {
  name: "Syed Saad",
  "Full Name ": "Syed Furqan",
  [mysym]: "key1",
  Company: "Gatekod",
  Age: 15,
  City: " Karachi",
  isloggedin: true,
};
console.log(JSUser.Company);
console.log(JSUser[mysym]);
console.log(JSUser["Full Name "]);
// ( 👆 Exicts Object two Syntax)
(JSUser.Company = "Goggle "), (JSUser.Age = 15.5), console.log(JSUser);
// Object.freeze(JSUser);
JSUser.Age = 18.5;
JSUser.greetings = function () {
  console.log("Hello My JS User");
};
JSUser.greetings2 = function () {
  console.log(`Hello My JS User ${this.name}`);
};
console.log(JSUser.greetings2());

// 2 : Constructor & Singletone
Object.create;

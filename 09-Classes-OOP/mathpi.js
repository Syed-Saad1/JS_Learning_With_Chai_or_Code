const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const User = {
  Username: "Saad Raza",
  email: "Saadraza@gmail.com",
  password: "123abc",

  orderchai: function () {
    console.log("Chai nahi banai");
  },
};
console.log(Object.getOwnPropertyDescriptor(User, "Username"));

Object.defineProperty(User, "Username", {
//   writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(User, "Username"));

for (let [key, values] of Object.entries(User)) {
  if (typeof values !== "function") {
    console.log(`${key} : ${values}`);
  }
}

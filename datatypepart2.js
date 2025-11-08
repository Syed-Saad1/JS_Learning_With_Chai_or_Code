// Primitive Data types.. 
// ( 👇 Simple data types jo value se store hote hain (immutable).  👇 )

let name = "Saad";       // String, 
let Age = 15;           // Number,
let isloggedin = true; // boolean,
let RollNo = null;    // Null, 
let Email;           // Undefind,
let Unique = Symbol('123333333433')   // Symbol,
let bignum = 54987476947666n;        // Bigint,

console.table([name , Age , isloggedin , RollNo , Email , Unique , bignum])


// Non-Primitive Data types.. 
// ( 👇 Complex types hote hain jo reference ke zariye store hote hain.
// Inka data change ho sakta hai (mutable).  👇)

const myobj = {     // Object,
    name : "Saad Raza",
    Age : 15,
}
console.log(myobj);
console.log(typeof myobj);

let MyArray = ["Saad Raza " , 16 , true , Symbol('334')]          // Arrays,
console.log(MyArray);
console.log(typeof MyArray);

const myfunction = function(){          // Function,
    console.log("Hello World");
} 
console.log(typeof myfunction);  // (👈 This time Function Object) 
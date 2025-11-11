const name = "Syed Saad ";
const Repo = 34;
console.log(name + Repo + " Repositories ");
// (👆 This syntax is correct, but it’s not used much anymore.)


console.log(`My Name is ${name} and My Github Page Repositories is ${Repo}  Thanks`);
// (👆 This syntax is correct, and  it is a Simple Syntax Code and this is Used in Many Places..)

const gamename = new String('Hello-World');
// console.log(gamename);  // (👆 This is a Second Syntax of declare String but this String is type Object)
console.log(gamename.__proto__); // ( 👆 This Syntax Check the Prototype of Object)
console.log(gamename.length); // ( 👆 This Sytax is Check the Value of Length)
console.log(gamename.toUpperCase()); // ( 👆 This Syntax is Change the Case of Value)
console.log(gamename.charAt(7)); // ( 👆 this Syntax is Which Character Which Position in index)
console.log(gamename.indexOf('W')); // ( 👆 this Syntax is Which Character Which index in position)

const newstring = gamename.substring(0,4);
console.log(newstring); // (👆 This method Syntax takes a string from a Specific Part
// By index, but does not accept negative values.)

const another = gamename.slice(0,4);
console.log(another); // (👆 This method Syntax is also  takes a string from a Specific Part
// By index, but do Accept negative values.)

const extraspaces = "           Saad Raza               ";
console.log(extraspaces);
console.log(extraspaces.trim()); // (👆 This method syntax removes extra spaces from user input and assigns it to a variable.)

const Url = "https://syedsaad10.com/saad%20Raza";
console.log(Url.replace('%20' , '_')); // ( 👆 This method syntax replaces a part of a string with another value in a variable.)

console.log(Url.includes('syedsaad')); // ( 👆 This method syntax checks if a specific value exists in a variable.)

console.log(gamename.split('words'));

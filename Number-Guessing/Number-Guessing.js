alert("Hello User Welcome to Number Guessing Game Create By Syed Saad");

let min = 1;
let max = 100;

let NumberGuess = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(NumberGuess);

let User = prompt(`Type a Number Between ${min} & ${max}`); 

if (parseInt(User) === NumberGuess) {
  alert(` 🎇✨ You Guess Number is ${User} Correct Keep it up! `);
} 
else {
  alert(` ❌😳 You Guess Number is ${NumberGuess} Wrong Please Try Again! `);
}
const Muslimheroes = ["Hazrat Abu-Bakar Sidiq R.A" , " Hazrat Umar Farooq R.A " , " Hazrat Usman R.A " , " Hazrat Ali R.A "];
const Natinoalheroes = ["Quaid-e-Azam " , "Allama Iqbal" , " Dr:Abdul Rasheed " , " liaquat Ali Khan " ]


// Muslimheroes.push(Natinoalheroes);
// console.log(Muslimheroes);
// ( 👆 This method is used to push one array into another array 
//  as a single value, not merge them properly.)


// let newCheckArray = Muslimheroes.concat(Natinoalheroes)
// console.log(newCheckArray);
// let newCheckArray2 = [...Muslimheroes , ...Natinoalheroes]
// console.log(newCheckArray2);
// (👆 This method is used two Syntax and to merge two or more arrays properly 
//  without changing the original arrays.)

// const Many_Array = [1 , 2 ,3 ,4 ,  [5 , 6 , 7], 8 ,9 , [10 , 11 , [12 , 13]]];
// console.log(Many_Array);
// console.log(Many_Array.flat(Infinity));
// // ( 👆 This method is used to convert nested arrays into a single array.)

console.log(Array.isArray("Saad Raza"));
console.log(Array.from("SaadRaza"));

console.log(Array.from({name : "Saad Raza"})); // interesting

let Score1 = 100
let Score2 = 200
let Score3 = 300
console.log(Array.of( Score1 , Score2 , Score3));

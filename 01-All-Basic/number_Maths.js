const Score = 1499;
console.log(Score); // ( 👆 This Syntax in declare a number in Variable )

const Balance = new Number(999);
console.log(Balance); // ( 👆 This Syntax Clearly define this Variable is use
// operator of new number but this make Num Object)

console.log(Balance.toString()); // ( 👆 This Method Syntax is Number Convert
// to String and exicts String Property)

const Num = 100.0;
console.log(Num.toFixed(2)); // ( 👆 This Method Syntax is decimal digits fix.)

let precision = 1252.923;
console.log(precision.toPrecision(1)); // ( 👆 This method syntax specific digits tak number ko format karta ha,
// but ya poore number ke digits count karta ha sirf decimal ke nahi.).

let tolS = 10000000;
console.log(tolS.toLocaleString("en-PK")); // ( 👆 This Method Syntax is Show Number Local Style Wih Comma and
// // and use Curency Show...)

// ********************************* Maths ********************************************

console.log(Math.abs(-1));
// ( 👆 This Method Syntax is Used Only Negative Num Convert into Positive.)

console.log(Math.round(4.3));
console.log(Math.round(4.6));
// ( 👆 This Method Syntax is Used Round off a Number But when decimal is .5 so it's return lower
//  Num and When deciaml is above .5 so it's return bigger number )

console.log(Math.ceil(4.1));
// ( 👆 This Method Syntax is to Used when a Number has any decimal .1 .5 .7  it always chose upper next whole number by mean 4.1 4.8 chosse 5 )

console.log(Math.floor(4.9));
// ( 👆 This Method Syntax is to Used when a Number has any decimal .1 .5 .7  it always chose lower back whole number by mean 4.1 4.9 Chosse 4 )

console.log(Math.random());
// ( 👆 This Method Syntax is to Used Genrate a random number between 0 and 1.)

console.log(Math.round(Math.random(1) * 10 + 1));

const Min = 10;
const Max = 100;

console.log(Math.round(Math.random() * (Max - Min + 1) + Min));

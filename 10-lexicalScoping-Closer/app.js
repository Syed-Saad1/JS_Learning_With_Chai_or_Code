// function outer() {
//   let username = "SaadRaza";
//   function inner() {
//     let privte = "Sarim";
//     console.log(username);
//   }
//   function innertwo() {
//     console.log(username);
//     console.log("Private", privte);
//   }
//   inner();
//   innertwo();
// }
// outer();
// console.log("Too Outer", username);

// CLouser

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();

// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = "orange";
// };
// document.getElementById("black").onclick = function () {
//   document.body.style.backgroundColor = "black";
// };

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
document.getElementById('orange').onclick = clickHandler('orange')
document.getElementById('black').onclick = clickHandler('black')
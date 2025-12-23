// setTimeout(() => {
//   console.log("saad");
// }, 10000);

const Saysaad = () => {
  console.log("Saad");
};
setTimeout(Saysaad, 10000);

const changetext = () => {
  document.querySelector("h1").innerHTML = "Async Js Best Video of internet";
};
const changeme = setTimeout(changetext, 10000);
// clearTimeout(changeme);

document.querySelector("#cancel").addEventListener("click", () => {
  clearTimeout(changeme);
  console.log("Stopped");
});

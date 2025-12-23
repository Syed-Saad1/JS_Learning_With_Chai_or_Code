// const saydate = () => {
//   console.log("Syed Saad Raza", Date.now());
// };
// setInterval(saydate, 1000);

const secondexp = (str) => {
  console.log(str, Date.now());
};
const interval = setInterval(secondexp, 1000, "hi Saad!");

clearInterval(interval)
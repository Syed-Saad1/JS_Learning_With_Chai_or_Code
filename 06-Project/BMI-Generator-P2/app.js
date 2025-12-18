const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Height = parseInt(document.querySelector("#Height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector("#result");
  if (Height === "" || Height < 0 || isNaN(Height)) {
    result.innerText = `Please Give a Valid Heights! ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    result.innerText = `Please Give a Valid Weight! ${Weight}`;
  } else{
    const bmi = (Weight / ((Height*Height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  }
});

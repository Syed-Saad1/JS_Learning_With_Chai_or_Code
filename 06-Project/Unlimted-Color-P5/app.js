const randomcolor = function () {
  const hexcode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += [Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startchangingcolor = () => {
  if (!interval) {
    interval = setInterval(changebg, 1000);
  }
  function changebg() {
    document.body.style.backgroundColor = randomcolor();
  }
};
document.querySelector("#Start").addEventListener("click", startchangingcolor);

const stopchangingcolor = () => {
  clearInterval(interval);
  interval = null;
};
document.querySelector("#Stop").addEventListener("click", stopchangingcolor);

const parents = document.querySelector(".parents");
console.log(parents);
console.log(parents.children);
console.log(parents.children[1].innerHTML);
// for (let i = 0; i < parents.children.length; i++) {
//     console.log(parents.children[i].innerHTML);
// }
parents.children[0].style.color = "red";
console.log(parents.lastElementChild.innerHTML);

const dayone = document.querySelector(".day");
// console.log(dayone.innerHTML);
// console.log(dayone.parentElement.innerText);
// console.log(dayone.nextElementSibling.innerHTML);

console.log("Nodes :", parents.childNodes);

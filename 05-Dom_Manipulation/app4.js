function addlanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)

}

addlanguage("Python");
addlanguage("Java");
addlanguage("typrScript");
addlanguage("Vanila JS");

function addoptilanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addoptilanguage("Node JS")

// Edit syntax 1
const thirdvalue = document.querySelector('li:nth-child(2)');
console.log(thirdvalue);
// thirdvalue.innerHTML = "JQuery"
const newli = document.createElement('li');
newli.textContent = 'JQuery';
thirdvalue.replaceWith(newli)

// Edit syntax 2
const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML = "<li>Type Script</li>"

// delete
const lastlang = document.querySelector("li:last-child")
lastlang.remove()
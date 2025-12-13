const CreateElementJS = document.createElement('div')
console.log(CreateElementJS);
CreateElementJS.className = "Container";
CreateElementJS.id = Math.round(Math.random() * 10 + 2);
CreateElementJS.setAttribute("title" , "generated title")
CreateElementJS.style.backgroundColor = 'green';
CreateElementJS.style.padding = '10px';
CreateElementJS.style.borderRadius = '10px';
// CreateElementJS.innerText = "Hello World"
const addtext = document.createTextNode("Hello World")
CreateElementJS.appendChild(addtext)
document.body.appendChild(CreateElementJS)

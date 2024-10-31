// locate an element
console.log(document.getElementById("app-title"));

// get element's attribute
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));
// update element's attribute
document.getElementById("app-title").title = "Shopping List";
// (attribute name, value)
document.getElementById("app-title").setAttribute("class", "shopping");
appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping";
document.getElementById("app-title").setAttribute("class", appClass);
const h1 = document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "hello";
h1.textContent = "hello again";
h1.innerHTML =  "<strong>Ski shop</strong>";
h1.style.color = "blue";
h1.style.backgroundColor = "green";
h1.style.padding = "10px";
h1.style.borderRadius = "5px";

// use css selector
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = document.querySelector("li");
firstItem.style.color = "blue";


-----------------------------------------------------------------------------

let output;
output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;
output = document.images;
output = document.images[0].src;
output = document.forms;
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
output = document.links[0].href;
output = document.links[0].id;
output = document.links[0].className;
output = document.links[0].classList;
output.forEach((list) => console.log(list));
let output;
output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children; /* node */
                                /* HTML collection */
output = document.doctype;

output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.images;   /* image */

// output = document.images[0].src;

output = document.forms;  /* Forms */
console.log(output);
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
// output = document.links[0].href;            /* link */
// output = document.links[0].id;
// output = document.links[0].className;
// output = document.links[0].classList;
// console.log(output); 
// output.forEach((list)=> console.log(list));

/* locate an element */
console.log(document.getElementById('app-title'));

/* get element's attribute */
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

/* update element's attribute */
document.getElementById("app-title").title = "Shopping List";
/* (attribute name, value) */
document.getElementById("app-title").setAttribute("class", "shopping");

appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping";
document.getElementById("app-title").setAttribute("class", appClass);

// console.log(document);

const h1 = document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "hello";
h1.innerText = "hello again";
h1.innerHTML = "<p>Ski shop</p>";

h1.style.color = "blue";
h1.style.backgroundColor = "green";
h1.style.padding = "10px";
h1.style.borderRadius = "5px";

/* use css selector */
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type='text']"));

console.log(document.querySelector("li:nth-child(2)").innerText);

console.log(document.querySelector("li:nth-child(2)").textContent);

const secondItem = document.querySelector("li:nth-child(2)");

// secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";


const listItems = document.querySelectorAll('.item');
console.log(listItems[0]);
console.log(listItems[0].innerText);
listItems[1].style.color = "red";
listItems.forEach((item, index) => {
    console.log(item.innerText);
    // item.style.color = "red";
    // if (index === 0) {
    //     item.remove();
    // }
    switch(index) {
        case 0:
            item.remove();
            break;
        case 1:
            item.remove();
            break;
        case 2:
            item.innerHTML = `orange
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
            break;
    }
});

console.log(listItems[0].innerText);

// return : HTMLCollections
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2); 
console.log(listItem2[1].innerText);

const listItemsArray = Array.from(listItem2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);



let output1;
// get child element from a parent

const parent = document.getElementById("item-form");

console.log(parent);
const children = parent.children;
console.log(children);
// children[1].innerText = "hello";
console.log(children[1].className);
console.log(children[1].nodeName);

console.log(children[1].localNodeName);

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
console.log(parent.children[0].nextElementSibling.innerText);
console.log(parent.children[0].previousElementSibling.innerText);    
console.log(parent.parentElement);
parent.parentElement.style.backgroundColor = "lightblue";

const secondItem1 = document.querySelector(".item:nth-child(2)");
console.log(secondItem1);
secondItem1.nextElementSibling.style.color = "red";
secondItem1.previousElementSibling.style.color = "blue";
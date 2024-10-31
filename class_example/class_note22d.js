function insertElement() {
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    // apply insertAdjacentElement can only apply once to the same element
    filter.insertAdjacentElement("beforebegin", h1);
    const h1clone = h1.cloneNode(true);
    filter.insertAdjacentElement("afterend", h1clone);
}
insertElement();

function insertText() {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin", "insertAdjustText");
    item.insertAdjacentText("afterend", "insertAdjustText");
}

insertText();

function insertHtml() {
    const cleanBtn = document.querySelector("#clear");
    cleanBtn.insertAdjacentHTML("afterbegin","<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("beforeend","<h2>insertAdjustHTML</h2>");
}
insertHtml();

function insertBeforeItem(){
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li, thirdItem);
}
insertBeforeItem();

function insertAfter(newE, existingE){
    existingE.parentElement.insertBefore(newE, existingE.nextSibling);

}
// const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");
insertAfter(li ,firstItem);

const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);
listItems[1].style.color = "red";
listItems.forEach((item,index) => {
console.log(item.innerText)
// switch (index){
//     case 0: item.remove();
//     break;
//     case 1: item.remove();
//     break;
//     case 2: 
//     item.innerHTML = `Orange
//         <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//         </button>`;
// }
//     if(index === 0){
//     item.remove()
//     }
});
// return : HTMLCollections
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);
console.log(listItems[1].innerText);

const listItemsArray = Array.from(listItems2);
console.log(listItemsArray);

const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);
console.log(listItems3[1].innerText);

let output;
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
// console.log(parent.children[0].previousElementSibling.innerText);    
console.log(parent.parentElement);
parent.parentElement.style.backgroundColor = "lightblue";


const secondItem = document.querySelector(".item:nth-child(2)");
console.log(secondItem);
secondItem.nextElementSibling.style.color = "red";
secondItem.previousElementSibling.style.color = "blue";

const thirdItem = document.querySelector(".item:nth-child(3)");
console.log(thirdItem);
thirdItem.nextElementSibling.style.color = "red";   
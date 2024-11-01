// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//     // console.log(item);
//     item.addEventListener("click", (e) => {
//         // console.log(e);
//         e.target.remove();
//     });
// });

const list = document.querySelector("ul");
// console.log(list);
list.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
})
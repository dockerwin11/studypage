// node
const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);
listItems[1].style.color = "red";
listItems.forEach((item, index) => {
    console.log(item.innerText);
    switch (index) {
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
    }
//    if (index === 0) {
//        item.remove();
//    }
});

// return: HTMLCollections
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2);
console.log(listItems[1].innerText);

const listItemsArray = Array.from(listItem2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);
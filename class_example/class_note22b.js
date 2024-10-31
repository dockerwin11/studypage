function createItem(item) {
    const li = document.createElement("li");
    li.className = "item";
    // li.innerText = item;
    li.appendChild(document.createTextNode(item));

    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";

    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}

createItem("orange");
createItem("mango");
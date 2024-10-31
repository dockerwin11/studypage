const clearBtn = document.querySelector("#clear");
clearBtn.onClick = () => {
    alert("clear all");
}

clearBtn.onClick = () => {
    console.log("clear all");
}

// case 2: add event listener to a button
// clearBtn.addEventListener("click", () => {
//     alert("clear all");
// });

// clearBtn.addEventListener("click", () => {
//     console.log("clear all");
// });

// case 3: use callback function name
function onClear () {
    const itemlist = document.querySelector("ul");
    while (itemlist.firstChild) {
        itemlist.removeChild(itemlist.firstChild);
    }
}

clearBtn.addEventListener("click", onClear);

// case 4: event listener with web API
// setTimeout(() => clearBtn.addEventListener("click", onClear),5000);

setTimeout(() => clearBtn.removeEventListener("click", onClear),5000);
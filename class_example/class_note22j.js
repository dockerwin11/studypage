const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

function run(){
    console.log(itemList.className);
    // text.className="card dark";
    console.log(itemList.classList);
    itemList.classList.forEach(c=>console.log(c));
    // text.classList.add("dark");
    console.log(text.classList);
    // text.classList.remove("card");
    // text.classList.toggle("hidden");
    text.classList.replace("card","dark");
    itemList.computedStyleMap.lineHeight = "3";
    items.forEach((item,index)=>{
        item.style.color = "red";
        if(index === 2 ){
            item.style.color = "green";
        }
    });
}

document.querySelector("button").onclick = run;
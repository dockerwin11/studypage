function replaceFirstItem(){
    const firstItem = document.querySelector("li:first-child");
    const li = document.createElement('li');
    li.textContent = "Replace First LI";
    firstItem.replaceWith(li); 
}
replaceFirstItem();

function replaceAllItems(){
    const lis = document.querySelectorAll("li");
    lis.forEach((item, index) => {
        // if (index === 1){
        //     item.innerHTML = "First replaced item";
        // }else{
        //     item.innerHTML = "Replaced all";
        // }
    
    item.innerHTML = index === 1 ? "First replaced item" : "Replaced all";
    });
}

replaceAllItems();

function replaceChildHeading(){
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");
    const h2 = document.createElement("h2");
    h2.id = "app-title";
    h2.textContent = "Shopping List";
    header.replaceChild(h2, h1);

}
replaceChildHeading();
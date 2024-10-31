const itemInput = document.getElementById("item-input");

// a. simple keypress
const onKeyPress = (e) => {console.log("keypress");};

itemInput.addEventListener("keypress", onKeyPress); 

// b. onkeydown
const onKeyDown = (e) => {
    console.log("keydown");

    // // check key code
    // if (e.key === "Enter") {
    //     console.log("enter");
    // }
    if (e.keyCode === 13) {
        alert("pressed enter"); 
    }

    if (e.code === "Digit1") {
        console.log("pressed 1");
    }

    if (e.repeat) {
        console.log("you are holding down" + e.key);
    }

    console.log("Shift " + e.shiftKey);
    console.log("Alt " + e.altKey);
    console.log("Control " + e.ctrlKey);
    if (e.shiftKey && e.key === "K") {
        console.log("you pressed shift and k");
    }

};

itemInput.addEventListener("keydown", onKeyDown);

// c. onkeyup
const onKeyUp = (e) => {
    console.log("keyup");
}

itemInput.addEventListener("keyup", onKeyUp);
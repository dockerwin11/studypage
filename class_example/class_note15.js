k = 2;
x = function (callback) {
    // let callback = y;
    // 
    console.log("I am from function expression !");
    return callback();
}

y = () => {
    console.log("I am from second function expression !");
    return 1;
}

w = () => {
    console.log("I am from third function expression !");
    return 2;
}

a = k == 0 ? x(y): k == 1 ? x(w) : console.log("nothing");
console.log(a);
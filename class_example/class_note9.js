function a() {
    let x;
    function b() {
        x = 1;
    }
    b();
    console.log(x);
}
a();
{
    let y = 1;
    {
        let y = 2;
        console.log(y);
    }    
}
console.log(y);

let x;
x = 1;

let i = 0;
for(;i<9;){
    console.log(i);
    i++;
}

for (let y=0; y<=10; ++y) {
    setTimeout(() => {        
    console.log(y)}, 1);
}
console.log(a());


i=1;
console.log(++i);
console.log(i++);

const person = {name: "ryan", age: 20};
console.log(person.name);
console.log(person['age']);

function a() {
    console.log("I am from function a");
}
person.age=a;
// console.log(person.age);
person.age();
person.status="123";

const p2 = {address: "prince house", floor: [1, {name : "ryan"}, 3]};
c = "name";
console.log(p2.floor[1][c]);
p2.floor = person.age;
p2['floor']();
console.log(person.status);

function b(x) {
    x();}
b(a);


const x1 = function () {
    console.log("I am from x1");
}
x();

const x2 = () => {
    console.log("I am from x2")
}
x2();
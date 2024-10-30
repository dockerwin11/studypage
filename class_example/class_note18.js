
a = [5,8,6,10,9];
max_value = (a,b) => (a > b ? a : b);
sum = (a,b) => a+b;
min_value = (a,b) => (a < b ? a : b);
function reduce(fn, a) {
    let result = a[0];
    for (let i = 1; i < a.length; i++) {
        console.log(i++);
        result = fn(result, a[i]);
        console.log(result);
    }
    return result;
}

console.log(reduce(sum, a));

const pets = [
    {type : 'dog', name: 'john', age: 6},
    {type : 'cat', name: 'jack', age: 2},
    {type : 'dog', name: 'jackie', age: 8},
    {type : 'cat', name: 'peter', age: 10}
];

const groupedPets = pets.reduce((temp, i) => {
    const variable = i.type;
    if(!temp[variable]) {
        temp[variable] = [];
    }
    temp[variable].push(i.name);
    return temp;
},{});
console.log(groupedPets);

// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((accumulator, currentValue)=> {
//     return accumulator + currentValue;
// },0);
// console.log(sum);

const numbers = [1,2,3,4,5];

const callback = (value) => {
    console.log(`Processing value: ${value}`);
    return callback;
}

const sum = numbers.reduce((acc, value) => {
    return acc(value);
}, callback);


const people = [
    {name:"john", age:60},
    {name:"ryan", age:25},
    {name:"ann", age:18},
    {name:"anna", age:22},
];
const totalAge = people.reduce((accumulator,person) => {
    return accumulator + person.age;
},0);
console.log(totalAge);
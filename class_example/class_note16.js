y = 0;
x = { name:'ryan',
      fun: () => {y++}
}
a = { name: 'ann',
      fun: x.fun
}

x.fun();
z = [x.fun];
z[0]();
a.fun();
console.log(y);

a = [5,8,6,10];
max_value = (a,b) => (a > b ? a:b);
function max_sequence(a) {
    let result = a[0];
    for (let e of a) {
        result = max_value(result,e);
    }
    return result;
}
console.log(max_sequence(a));

// case 2
min_value = (a,b) => (a < b ? a:b);
function min_sequence(a) {
    let result = a[0];
    for (let e of a) {
        result = min_value(result,e);
    }
    return result;
}
console.log(min_sequence(a));

// case 3
function reduce(fn, a) {
    let result = a[0];
    for (let e of a) {
        result = fn(result, e);
    }
    return result;
}
console.log(reduce(max_value, a))
console.log(reduce(min_value, a))


result = a.reduce((a,b) => a > b ? a: b);
console.log(result);
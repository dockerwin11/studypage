let a = 10;
console.log((a <= 10));
if ((a <= 10) || (a >= 1) && (a <= 3)) {
    console.log("a is less than or equal to 10 and a is larger than 1");
}
else if (a < 1) {
    console.log("a is less than 1");
}
else if (a > 10) {
    console.log("a is larger than 10");
}
else {
    console.log("something wrong");
}


a = 90;
switch(a) {
    case 100:
        console.log("A");
        break;
    case 90:
        console.log("B");
        break;
    case 80:
        console.log("C");
        break;
}

a = (console.log("input city") || 0 || '' || undefined || null || false || NaN || );
console.log(a);
if (! -1) {
    console.log("TRUE");
}

default_city = "KN";
city = ''
a = (city || console.log("input city") || default_city);
console.log(a);

if (!(console.log("input code"))) {
    console.log("yes");
}

a = 'abc'.toUpperCase().repeat(3).substring(1,9);
console.log(a);

for (let i = 0; i <= 10; i++) {
    console.log("hello");
}

let __ = 0;
for (; __ <= 10; ) {
    console.log("hello");
    __++;
}

let x = 0;
while (true) {
    if (x >= 10 ) {
        break;
    }

    if (x == 3) {
        x++;
        continue;
    }
    console.log(x);
    x++;
}
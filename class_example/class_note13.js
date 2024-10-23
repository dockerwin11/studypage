x = a => b => a + b;

x = function (a) { return function (b) { return a + b;}};

console.log(x(1)(2));



b = function (a+2) { console.log(c); };
console.log(b);

x = () => {
    let x = 8;
    let y = 9;
    console.log("I am inside arrow function");
    return [x, y];
}
console.log(x());
[a,b]=x();

console.log(x()[1]);

console.log(a,b);

// let companys;
const companies = [
    {name: "company one", category: "retails", start: 1992, end: 2024},
    {name: "company two", category: "finance", start: 1971, end: 2020},
    {name: "company three", category: "wholeSales", start: 1988, end: 1999},
    {name: "company four", category: "wholeSales", start: 1996, end: 2010},
    {name: "company five", category: "retails", start: 1960, end: 2004},
    {name: "company six", category: "finance", start: 1992, end: 2011},
    {name: "company seven", category: "finance", start: 1986, end: 2009},
    {name: "company eight", category: "retails", start: 1977, end: 2012},
    {name: "company nine", category: "retails", start: 1992, end: 2006},
    {name: "company ten", category: "wholeSales", start: 1992, end: 1997}
];

const ages = [33,1,45,77,60,23,7,80,55,67,29,16];

// companies.forEach((company)=> { 
//     console.log(company.start);
//     company.start++;
//     console.log(company.start);
// });

// for (let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach(companys = (company) => { console.log(company.start)});
// console.log(companys);

// ages.forEach((age, index) => {
//     if (index % 2) {
//         console.log(age);
//     }
//     age = age/2;
//     console.log(age);
//     ages[index]=age;
// });

// console.log(ages);

// total = 0;
// ages.forEach(age => { total = total + age; });
// console.log(total);

// let adult = [];
// for (let i=0; i <ages.length; i++) {
//     if (ages[i] >=18) {
//         adult.push(ages[i]);
//     }
// }

// console.log(adult);

// let adult = ages.filter(age => { return (age >= 18) });
// console.log(adult);

const retailsCompanies= companies.filter(company => (company.category === 'retails'));
console.log(retailsCompanies);

const oldCompanies = retailsCompanies.filter(company => ((company.end - company.start) > 20));
console.log(oldCompanies);

const companyNames = companies.map(company=>company.name);
console.log(companyNames);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);
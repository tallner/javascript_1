//console.log('hello world');
//document.write('hello world');
//alert( 'Hello, world!' );
//console.log(2*3, typeof (2*3));
//console.log('2*3', typeof '2*3');


let age = '43';
console.log(age, typeof age);

age++;
console.log(age);

const myname = 'christian';
console.log(myname, typeof myname);

let cloudy = true;
console.log(cloudy, typeof cloudy);

let empty;
console.log(typeof empty);

const lName = 'tallner';
const fullName = myname + lName;
console.log(fullName, typeof fullName);

const salary = 75000;
const tax = 0.5;
const moneyToSpend = salary*tax;
console.log(moneyToSpend);

const randomVals = ['test',45];
console.log(randomVals);
console.log(randomVals.length);
console.log(randomVals[1]);

randomVals[0] = 'annantext' ;
console.log(randomVals);

console.log(document.querySelector('.test'));

const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'hello worlds';

console.log(h1);

const p1 = document.createElement('p');
document.body.appendChild(p1);
p1.innerText = 'Länk: <a href=#>länk p1 </a>';

const p2 = document.createElement('p');
document.body.appendChild(p2);
p2.innerHTML = 'Länk: <a href=#>länk p2 </a>';

//numrerad lista, 3 punkter
const ol = document.createElement('ol');
document.body.appendChild(ol);

const il1 = document.createElement('li');
il1.innerText = 'hund';
il1.style.color = 'yellow';
const il2 = document.createElement('li');
il2.innerText = 'katt';
const il3 = document.createElement('li');
il3.innerText = 'gris';

ol.appendChild(il1);
ol.appendChild(il2);
ol.appendChild(il3);
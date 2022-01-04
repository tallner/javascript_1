
//get all H2 elements
const allH2 = document.querySelectorAll('h2');
console.log(allH2);

//change background of first H2 element
allH2[0].style.backgroundColor = 'hotpink';

//get first a-element
const a = document.querySelector('a');
a.href = 'https://www.svtplay.se';
//a.setAttribute('href', 'https://www.svtplay.se');

//remove button
const btn = document.querySelector('button');
btn.remove();

//get h3
const h3 = document.querySelector('h3');
console.log(h3.innerText);

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
//btn.remove();

// get h3
// const h3 = document.querySelector('h3');
// console.log(h3.innerText);

/*
ÖVNINGSUPPGIFTER

-Ändra innehåll-
1. Byt namn på första hoodien från Ash till Potato. 
2. Byt namn på Home till Start
3. Byt namn på Contact till Mail Us.
4. Byt ut informationen om Sinus Hoodie - Fire.
5. Byt ut adressen i footern.
6. Ändra text på samtliga knappar till add to cart.
*/

//Uppgift 1
const h3 = document.querySelector('h3');
console.log(h3.innerText);
h3.innerText = "Potato";
console.log(h3.innerText);

//Uppgift 2
const home_btn = document.querySelector('#header-navigation > a');
home_btn.innerText = "Start";
console.log(home_btn);

//Uppgift 3
const contact = document.querySelectorAll('article > a');
contact[2].innerText = "mail us";
console.log(contact[2].innerText);

//Uppgift 4
const fire = document.querySelector(".art-2 > p");
fire.innerText = "Fin tröja";
console.log(fire);

//Uppgift 5
const adress = document.querySelector('footer section article p');
adress.innerHTML = "Sinus skateboards <br> Fasanvägen 14 <br> 247 47, Flyinge";

//Uppgift 6
const btns = document.querySelectorAll('button');
console.log(btns);
btns.forEach(button => button.innerText = "Add to cart");

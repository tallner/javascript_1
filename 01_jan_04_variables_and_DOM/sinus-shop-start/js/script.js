
/**/



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
//const btn = document.querySelector('button');
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

/*
-Ändra CSS-stil-

1. Byt bakgrundsfärg på en knapp.
2. Byt bakgrundsfärg på 1 av produkterna.
3. Byt text-färg på samtliga <p>.
4. Lägg till klassen active på menyalternativet home.
5. Ta bort klassen logo på logotypen.
6. Ändra bredden på alla img i articles till 50%
*/

//Uppgift 1
const btn = document.querySelector('button');
console.log(btn);
btn.style.background = 'yellow';

//Uppgift 2
const water = document.querySelector(".art-3 > figure");
water.style.background = "red";
console.log(water);

//Uppgift 3
const p = document.querySelectorAll('p');
p.forEach(p => p.style.color='red');

//Uppgift 4
home_btn.classList.add('active');

//Uppgift 5
const logo = document.querySelector('header > img');
logo.classList.remove('logo');

//Uppgift 6
const widthImg = document.querySelectorAll('img');
widthImg.forEach(bild => bild.style.width='50%');


/*
-Lägg till / ta bort element-

1. Lägg till ett nytt menyalternativ.
2. Ta bort Contact i menyn
3. Lägg till en article i main
4. Ta bort alla länkar till sociala medier. Alltså alla a-element som länkar till sociala medier. 
5. Lägg till en andra knapp i varje product card article.
6. Kan du lyckas du med denna? Lägg till en ny produkt med följande info.
img - hoodie-forest.png
h2 - Sinus Hoodie
h3 - forest
p - Den nya produkten
*/

//Uppgift 1
const addMenu = document.querySelector('#header-navigation');
const atest = document.createElement('a');
atest.href='test';
atest.innerText='test';
//addMenu.appendChild(atest);
addMenu.insertBefore(atest, addMenu.children[1]);

//Uppgift 2
const removeMenu = document.querySelectorAll('#header-navigation > a');
removeMenu.item(3).remove();
console.log(removeMenu.item(3));

//Uppgift 3
const getArt = document.querySelectorAll('main > article');
const addArt = document.querySelector('main');
const clonedNode = getArt.item(0).cloneNode(true);
addArt.appendChild(clonedNode);
clonedNode.className = 'newArt';
console.log(clonedNode);
console.log(addArt);

//Uppgift 4
const removeSocial = document.querySelectorAll('article');
const socialItem = removeSocial.item(6);
//socialItem.removeChild(0);
socialItem.children[1].remove();
socialItem.children[1].remove();
socialItem.children[1].remove();
console.log(socialItem);

//Uppgift 5
const addBtn = document.querySelectorAll('main > article');
var but = document.createElement("button");
but.innerText = 'hej';
//addBtn[0].appendChild(but);
//addBtn[1].append(but);
//addBtn[2].append(but.cloneNode(true));
//addBtn[3].appendChild(but);

addBtn.forEach(mainArticle => mainArticle.appendChild(but.cloneNode(true)));
console.log(addBtn.length);

//Uppgift 6
const changeArt = document.querySelector('.newArt');
const changeImg = changeArt.children.item(0).children.item(0);
const changeH3 = changeArt.children.item(2);
changeH3.innerText = 'forest';

changeImg.setAttribute('src','img/hoodie-forest.png');
//changeH3.setAttribute('h3','img/hoodie-forest.png');

console.log(changeH3);
//console.log(changeImg.attributes[0].value);
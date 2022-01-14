//frågor
// varför queryselector och inte byId?
// var inte skriva = direct på createElement().innerText='mmmmm'?

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const p = document.querySelector('p');

// btn.addEventListener('click', function(e)){
//     console.log(e);

//     const p = document.querySelector('p');
//     p.innerText = 'test';
// }

btn.addEventListener('click', callback);//anropa inte callback här, den triggas av clicket
h1.addEventListener('click', callbackh1);
h1.addEventListener('mouseenter', mouseEnterH1);
h1.addEventListener('mouseleave', e => p.innerText='mus lämnat');


document.body.addEventListener('mousemove', function(event){
    // console.log(event);

    // document.body.style.backgroundColor = `hsl(${event.clientX}, 80%, 70%)`;
});






function mouseEnterH1(event){
    p.innerText = 'nu är pekare på h1';
}

function callbackh1(event){
    //console.log(event);
//     const hue = Math.random();
//     console.log(hue);

// h1.style.backgroundColor=  `hsl(${hue}, 80%, 70%)`;

}

function callback(e){
    console.log(e);

    p.innerText = 'test';
}

// pga hoisting kommer denna function inte funka. parametrar flyttas upp osv under tolkning av scriptet
// const callback = function(e){
//     console.log(e);

//     const p = document.querySelector('p');
//     p.innerText = 'test';
// };






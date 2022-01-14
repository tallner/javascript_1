const div = document.querySelector('div');


// div.addEventListener('click', function(e){
//     console.log(e.target.innerText);
//     div.style.backgroundColor = e.target.innerText;
// });



/// alternative

// div.addEventListener('click', changeColor);

// function changeColor(e){
//     div.style.backgroundColor = e.target.innerText;
//     console.log(e.target.innerText);
//     console.log(div.style.backgroundColor);
// }

// alternative arrow
div.addEventListener('click', e => div.style.backgroundColor = e.target.innerText);
////////////////////
//keyboard events///
////////////////////
// const h1 = document.querySelector('h1');
// const b = document.body;
// let color = '';
// //const input = document.querySelector('input');


// //b.addEventListener('keyup', keyInput);
// b.addEventListener('keydown', keyInput);

// function keyInput(event){
    
//     if(event.key==='ArrowUp'){
//         color++;

//     }else if(event.key==='ArrowDown'){
//         color--;
//     }
//     b.style.backgroundColor = `hsl(220,75%,${color}%)`;
//     console.log(color);
// }




// b.addEventListener('keydown', keyCallBack);

// function keyCallBack(eventKey){
//     console.log(eventKey);
//     h1Noclick.innerText = 'ny text';
//     //h1Noclick.innerText = eventKey.key;
// }





const btn = document.querySelector('button');
btn.addEventListener('click', getText);
function getText(e){
    console.log(e);

    const h1 = document.querySelector('h1');
    const input = document.querySelector('input');

    h1.innerText = input.value;

}
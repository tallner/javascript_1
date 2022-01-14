const p = document.querySelector('p');
const userInput = document.querySelector('input').value;
const btn = document.querySelector('button');
let compVal = 0;

btn.addEventListener('click', getUserValue);

startGame();

function startGame(){
    p.innerText = 'Input a number and press start';
    userInput.value = '';
    compVal = Math.round(100*Math.random());
    console.log('game started ', compVal);
}

function getUserValue(){
    console.log('userValue:',userInput.value );
    compareNums(userInput.value,compVal);
}

function compareNums(userNum, compNum){
    if(userNum == compNum){
        winnerFunc();
        console.log('win');
        return true;
    } else {
        if(userNum > compNum){
            console.log('tooLarge');
            p.innerText = 'tooLarge';
        } else {
            console.log('tooSmall');
            p.innerText = 'tooSmall';
        }
    }
}

function winnerFunc(){
    alert('du vann');
    startGame();
    console.log('done');
}
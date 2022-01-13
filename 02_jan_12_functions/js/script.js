
logga();
logga();
addH1(5);
//createElement('p','hej xs',0);
//createElement('h1','hej xis',1);
createElement('h1','Hej/', 1);
console.log(mply(6,87));
console.log(isEven(7));

function logga(){
    console.log('log konsol');
}


function addH1(iterator)
{
    const minHue = 225;
    const maxHue = 290;
    
    for (let index = 0; index < iterator; index++) {        
        const h1 = document.createElement('h1');
        const hue = minHue + (index*((maxHue-minHue)/iterator));

        h1.innerText = 'COLOR';
        h1.style.backgroundColor = `hsl(${hue}, 75%, 75%)`;

        document.body.append(h1);
        
    }
}

function createElement(element, text, nrElement=1){
    
    for (let index = 0; index < nrElement; index++) {
        const el = document.createElement(element);
        document.body.append(el);
        el.innerText = text;        
    }

    console.log('args: ', arguments);
}

function mply(x, y){
    return x*y;
    
}

function isEven(x){
    return !(x%2);
}

console.log(returnMax(3,4,5,6,7,8));
function returnMax(){
    let maxVal = 0;
    for (let index = 0; index < arguments.length; index++) {
        // if (arguments[index] > maxVal) {
        //     maxVal = arguments[index];
        //   }
          (arguments[index] > maxVal) ? maxVal = arguments[index] : 0;

          
    }
    return maxVal;
}

const myFirstClassFunc = function(x, y){
        return x*y;   
}
console.log( myFirstClassFunc(3,5));


//callback and higher-order
const firstCallbackFunc = function(){
    console.log('firstFunc');
}
const secondFunc = function(callback){
    console.log('secondFunc');
    callback();
}
secondFunc(firstCallbackFunc);
console.log('--------------');


function square(x){
    return x*x;
}
function timesTwo(x){
    return 2*x;
}

//For-loops för att multiplicera osv
const myArr = [43,45,56,6,8,12];
for (let i=0;i<myArr.length; i++) {
    myArr[i] = square(myArr[i]);
}
console.log(myArr);
console.log('--------------');
for (let i=0;i<myArr.length; i++) {
    myArr[i] = timesTwo(myArr[i]);
}
console.log(myArr);
console.log('--------------');

//byt ut array
const arr2 = [34,34,34,34,34];
function arrSquare(arrOfNumb){
    for (let i=0;i<arrOfNumb.length; i++) {
        arrOfNumb[i] = square(arrOfNumb[i]);
    }
}
function arrTimesTwo(arrOfNumb){
    for (let i=0;i<arrOfNumb.length; i++) {
        arrOfNumb[i] = timesTwo(arrOfNumb[i]);
    }
}

console.log(arr2);
arrSquare(arr2);
arrTimesTwo(arr2);
console.log('arr2 sq: ',arr2);
console.log('arr2 t2: ',arr2);
console.log('--------------');

//higher order
function mathOnArray(arrOfNumb,mathOnFunc){
    for (let i=0;i<arrOfNumb.length; i++) {
        arrOfNumb[i] = mathOnFunc(arrOfNumb[i]);
    }
}
mathOnArray(arr2,square);
console.log(arr2);
mathOnArray(arr2,timesTwo);
console.log(arr2);

//arrow functions
const double = x => x*x;
console.log(double(4));


//callback funtioner
function newsquare(x){
    return x*x;
}
function newtimesTwo(x){
    return 2*x;
}

//higher order
function newmathOnArray(arrOfNumb,mathOnFunc){
    for (let i=0;i<arrOfNumb.length; i++) {
        arrOfNumb[i] = mathOnFunc(arrOfNumb[i]);
    }
}

newmathOnArray(arr2,x => x+1);
console.log(arr2);


// En funktion higher order-funktion som har två parametrar: 
// - en array med nummer 
// - en callback-funktion som utför en beräkning och returnerar den
// Higher-order funktionen ska skapa så många p-element som det finns element i arrayen. 
// Det som callback-funktionen returnerar ska vara innerText på elementen som skapas.

// function callbackFunc(index){
//     const array = ['a','q','f','m','x'];
//     return array[index];
// }

// const numArr = [1,2,3,4,5];
// function highOrderFunc(numArr, callbackFunc){
//     for (let index = 0; index < numArr.length; index++) {
//         const pel = document.createElement('p');
//         pel.innerText = callbackFunc(index);
//         document.body.append(pel);
//     }
// }
// highOrderFunc(numArr,callbackFunc);

// En funktion som har två parametrar:
// -> en array med nummer
// -> en callback-funktion. 
// Callback-funktionen ska returnera sant eller falskt. 
// Callback-funktionen kan tex kolla ifall ett nummer är jämnt eller udda, om det är mer än 100, osv. 
// Higher order-funktionen ska skapa ett h1-element varje gång callback-funktionen returnerar true. 
// InnerText på h1 ska vara värdet av array-elementet som stoppades in i callback-funktionen. 

// function callbackFunc(checkNum){
//     return (checkNum%2===0);//return true if even number
// }

// const numArr = [1,2,3,4,5,6];
// function highOrderFunc(numArr, callbackFunc){
//     for (let index of numArr) {
//         callbackFunc(index) ? document.body.append(document.createElement('h1').innerText=callbackFunc(index)) : 0; //why not working?
//         // if(callbackFunc(index)){
//         //    const el = document.createElement('h1');
//         //    el.innerText = callbackFunc(index);
//         //    document.body.append(el);
//         // }
//     }
// }
// highOrderFunc(numArr,callbackFunc);

//arrow functions
// const myFunction = function(x){
//     return x*2;
// }
// console.log(myFunction(10));
// const myFunctionArr = x => x*2;
// console.log(myFunctionArr(10));

// const myFunction = function(x, y){
//     return x*y;
// }
// console.log(myFunction(10,12));
// const myFunctionArr = (x,y) => x*y;
// console.log(myFunctionArr(10,12));

// const myFunction = function(m){
//     console.log(m);
// }
// myFunction(10);
// const myFunctionArr = (m) => console.log(m);
// myFunctionArr(12);

// const myFunction = function(n){
//     return `Hello, ${n}`;
// }
// console.log(myFunction(10));
// const myFunctionArr = x => `Hello, ${x}`;
// console.log(myFunctionArr(100));


// En funktion higher order-funktion som har två parametrar: 
// - en array med nummer 
// - en callback-funktion som utför en beräkning och returnerar den
// Higher-order funktionen ska skapa så många p-element som det finns element i arrayen. 
// Det som callback-funktionen returnerar ska vara innerText på elementen som skapas.

const callbackFunc = number => number*3.1415;

const numArr = [1,2,3,4,5];
function highOrderFunc(numArr, callbackFunc){
    for (let index = 0; index < numArr.length; index++) {
        const pel = document.createElement('p');
        pel.innerText = callbackFunc(index);
        document.body.append(pel);
    }
}
highOrderFunc(numArr,callbackFunc);
//Bakgrundsfärg
//1 
//Användare ange CSS-färg i en text-input
//Sätt bakgrundsfärgen på bodyn hjälp av den inputen. (Sätt bodyn till 100vh så att den täcker hela viewporten.)
const input = document.querySelector('input');
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        console.log(input.value);
        document.body.style.backgroundColor = input.value;
    }
});

//2 
//Ändra hue på bodyns bakgrundsfärg när användaren klickar i bodyn. 
//Bestäm hue med hjälp av x-position av musen. Alltså event.clientX.
const b = document.querySelector('body');
b.addEventListener('mousemove',function(e){
    console.log(e);
    document.body.style.backgroundColor = `hsl(${e.clientX},76%,76%)`;
});

//3 
//Ändra saturation på bodyns bakgrundsfärg när användaren klickar i bodyn. Bestam saturation med hjälp av musens y-position.
console.log(b.scrollHeight);
b.addEventListener('click',function(e){
    console.log(e);
    document.body.style.backgroundColor = `hsl(220,${100*e.clientY/b.scrollHeight}%,76%)`;
    console.log(100*e.clientY/b.scrollHeight);
});
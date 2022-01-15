//Bakgrundsfärg
//1 
//Användare ange CSS-färg i en text-input
//Sätt bakgrundsfärgen på bodyn hjälp av den inputen. (Sätt bodyn till 100vh så att den täcker hela viewporten.)
// const input = document.querySelector('input');
// input.addEventListener('keypress', function(e){
//     if(e.key === 'Enter'){
//         console.log(input.value);
//         document.body.style.backgroundColor = input.value;
//     }
// });

//2 
//Ändra hue på bodyns bakgrundsfärg när användaren klickar i bodyn. 
//Bestäm hue med hjälp av x-position av musen. Alltså event.clientX.
const b = document.querySelector('body');
b.addEventListener('mousemove',function(e){
    //console.log(e);
    document.body.style.backgroundColor = `hsl(${e.clientX},76%,76%)`;
});

//3 
//Ändra saturation på bodyns bakgrundsfärg när användaren klickar i bodyn. Bestam saturation med hjälp av musens y-position.
//console.log(b.scrollHeight);
b.addEventListener('click',function(e){
    //console.log(e);
    document.body.style.backgroundColor = `hsl(220,${100*e.clientY/b.scrollHeight}%,76%)`;
    //console.log(100*e.clientY/b.scrollHeight);
});

//Handlingslista
//1 
//En text input och en knapp.
//Varje gång du fyller i text-inputen och klickar på knappen läggs input-innehållet till en lista nedanför.
const input = document.querySelector('input');
const ol = document.createElement('ol');

b.appendChild(ol);

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const li = document.createElement('li');
        li.innerText = input.value;
        
        //3
        //Om du klickar på en punkt i listan ska det elementet tas bort.
        li.addEventListener('click',e => li.remove());
        
        //2
        //Varannan punkt som läggs till på listan ska få en bakgrundsfärg
        if(ol.childElementCount%2===0){li.style.backgroundColor = 'white';}
        
        ol.appendChild(li);
        input.value = '';
    }
});


//Functions
//Använd funktionerna från tidigare övningsuppgifter. Anropa en funktion när användaren har klickat på en knapp. Användaren bestämmer vilka argument som skickas till dem genom text-inputs. Tips: Dessa funktioner behöver alltså anropas inifrån callback-funktionen i event-listernen. 
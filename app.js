let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío'





function btn_userConsole(){
    return console.log('¡Hola, mundo!');
}

function btn_userName(){
    let name = prompt('Introduce un nombre por favor');
    return console.log(`¡Hola, ${name}!`);
}

function btn_userDouble(){
    let numDouble = parseFloat(prompt('Introduce un numero por favor'));
     return console.log(`El doble del numero seleccionado es ${numDouble+numDouble}`);
}
function btn_userAverage(){
    let numAverage = 0;
    for (var i = 0; i < 3; i++) {
        numAverage = numAverage + parseInt(prompt(`Introduce el valor #${i+1} por favor`));   
    }
    return console.log(`El promedio de los valores seleccionados es ${numAverage/3}`);
}
function btn_userBigger(){
    const numCount = 2;
    let numbers = [];//Array []
    for (var i = 0; i < numCount; i++) {
        val = parseInt(prompt(`Introduce el valor #${i+1} por favor`));
        numbers.push(val);
    }
    return console.log(`El mayor de los valores seleccionados es ${Math.max(...numbers)}`);
    //Se utiliza el operador spreed "..."para separar todo el array 
    //y sacarle el maximo de ellos con la funcion Math.max
}

let num1, num2;
function btn_userElevated(){

    let num1 = parseFloat(prompt('Introduce un numero por favor'));
     return console.log(`El doble del numero seleccionado es ${num1*num1}`);
}
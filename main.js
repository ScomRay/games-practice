/*let nombre='Raymundo';
let saludo='Hola chicos';
console.log(`${saludo}, mi nombre es ${nombre}`);*/
//Piedra, papel o tijera
/*var player1;
var player2;
const game = (play1,play2) => {
    player1=prompt('Jugador 1, ingresa tu nombre.');
    player2=prompt('Jugador 2, ingresa tu nombre.');
    play1=prompt(player1+', ingresa tu opción.');
    play2=prompt(player2+', ingresa tu opción.');
    if(play1!=play2){
        if(play1=='piedra'&&play2=='tijera'){
            alert(player1+' gana.');
            }else{
            if(play1=='piedra'&&play2=='papel'){
                    alert(player2+' gana.');
            }else{
                if(play1=='tijera'&&play2=='piedra'){
                    alert(player2+' gana.');
                }else{
                    if(play1=='papel'&&play2=='piedra'){
                        alert(player1+' gana.');
                    }else{
                        if(play1=='papel'&&play2=='tijera'){
                            alert(player2+' gana.');
                        }else{
                            if(play1=='tijera'&&play2=='papel'){
                                alert(player1+' gana.');
                            }
                        }
                    }
                }
            }
        }   
    }else{
    alert('Hay un empate :(');
    }
}
game();*/
//Piedra, papel o tijera vs. IA
/*const opciones=['piedra','papel','tijera'];
const ia=Math.round(Math.random()*2);
const play2=opciones[ia];
const game=(play)=>{
    play=prompt('Ingresa tu opción: piedra, papel o tijera.');
    console.log(ia);
    if(play!=play2){
        if (play=='piedra'&&play2=='papel') {
            alert('¡Has perdido! '+play+' no vence a '+play2);
        }else if (play=='piedra'&&play2=='tijera') {
            alert('¡Has ganado! '+play+' vence a '+play2);
        } else if(play=='papel'&&play2=='piedra') {
            alert('¡Has ganado! '+play+' vence a '+play2);
        }else if (play=='papel'&&play2=='tijera') {
            alert('¡Has perdido! '+play+' no vence a '+play2);
        } else if (play=='tijera'&&play2=='piedra') {
            alert('¡Has perdido! '+play+' no vence a '+play2);
        } else if (play=='tijera'&&play2=='papel') {
            alert('¡Has ganado! '+play+' vence a '+play2);
        }  
    }else{
        alert('Hay un empate. '+play+' no vence a '+play2);
    }
}
game();*/
//Número mayor
/*const mayor = (num1,num2,num3) => {
num1 = prompt('Inserte el primer número que será evaluado para determinar el mayor');
num2 = prompt('Inserte el segundo número que será evaluado para determinar el mayor');
num3 = prompt('Inserte el tercer número que será evaluado para determinar el mayor');
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if (num1!=num2) {
    if (num1!=num3) {
        if (num2!=num3) {
            if (num1>num2) {
                if (num1>num3) {
                    alert(num1+' es mayor que '+num2+' y '+num3);
                } else {
                    alert(num3+' es mayor que '+num1+' y '+num2);
                }
            } else if (num2>num3) {
                alert(num2+' es mayor que '+num1+' y '+num3);
            } else {
                alert(num3+' es mayor que '+num1+' y '+num2);
            }
        } else if (num1>num3) {
            alert(num1+' es mayor que '+num2+' y '+num3);
        } else {
            alert(num2+' es igual a '+num3+', pero son mayores que '+num1);
        }  
    } else if (num2>num1) {
        alert(num2+' es mayor que '+num1+' y '+num3);
    } else {
        alert(num1+' es igual a '+num3+', pero son mayores que '+num2);
    }
} else if (num3>num2) {
    alert(num3+' es mayor que '+num1+' y '+num2);
} else {
    alert(num1+' es igual a '+num2+', pero son mayores que '+num3);
}
}
mayor();*/
//Arreglo de Garnachas
const comida = ['Empanada','Tostada','Garnacha','Tamal','Picadillo'];
console.log('Ejercicio 1');
const allComida = () => {
    for (let i = 0; i < comida.length; i++) {
        const hola = console.log(comida[i]);
    }
}
allComida();
console.log('Ejercicio 2');
const someComida = () => {
    for (let i = 0; i < comida.length; i++) {
        if (i > 1 && i < 4) {
            const hello = console.log(comida[i]); 
        }
    }
}
someComida();
console.log('Ejercicio 3');
const oddComida = () => {
    for (let i = 1; i < comida.length; i++) {
        if (i % 2 != 0) {
            const ola = console.log(comida[i]); 
        }
    }
}
oddComida();
console.log('Ejercicio 4');
const evenComida = () => {
    for (let i = 0; i < comida.length; i++) {
        if (i % 2 == 0) {
            const hey = console.log(comida[i]); 
        }
    }
}
evenComida();
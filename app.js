//variables 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 5;
console.log(numeroSecreto);

//simplificación de la estructura designar un texto a un elemento
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//dar una accion al boton seleccionado
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número secreto en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    {
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento("p","El número secreto es mayor");
        }
        else{
            asignarTextoElemento("p","El número secreto es menor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    //generacion de numero secreto con funciones
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")
    }
    else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            //incluye el número generado en la listado de sorte para guarda su información 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Selecciona un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja ();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales ();
    //desabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
    
}
//Contendio del texto 

condicionesIniciales();
/*
    Ejercicio 1: Dada una secuencia de números finalizada en cero, ingresados por
    el usuario. Indicar la cantidad de números pares e impares ingresados, además
    de imprimir la suma total de todos los números ingresados.
*/
/* 
var contadorPares = 0
var contadorImpares = 0
var sumaTotal = 0

var numero = parseInt(prompt("Ingrese un número."))

while (numero != 0){

    if (numero % 2 == 0){
        contadorPares = contadorPares + 1
    }else{
        contadorImpares = contadorImpares + 1
    }

    sumaTotal = sumaTotal + numero
    numero = parseInt(prompt("Ingrese otro número"))
}

console.log("Cantidad de números pares ingresados: " + contadorPares)
console.log("Cantidad de números impares ingresados: " + contadorImpares)
console.log("La suma total es: " + sumaTotal) */

/*
    Ejercicio 2: Dada un número ingresado por el usuario, indicar todos los
    números impares que existen entre 1 y el número indicado.
*/

var numero = parseInt(prompt("Ingrese un número, por favor."))

if (numero > 1){
    for (var i = 1; i <= numero; i = i + 1){
        if (!(i % 2 == 0)){
            console.log(i)
        }
    }
}else{
    console.log("Error, el número ingresado debe ser mayor a 1.")
}























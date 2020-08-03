/*
    Ejercicio 2: Dado el radio de una circunferencia, calcular su área.
    Area = PI * radio ^ 2
*/

const PI = 3.1416

var radio = parseFloat(prompt("Ingrese el radio de la circunferencia, por favor."))
var area = PI * Math.pow(radio,2)

console.log('El area de la circunferencia es: ' + area)
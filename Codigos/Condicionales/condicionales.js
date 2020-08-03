/*
    Estructuras de control de flujo (condicionales):
        Dada una condición, si esta es cierta, se ejecuta un bloque de código,
        en caso contrario, se ejecuta otro bloque del código.
    Existen tres tipos de condicionales en JavaScript:
        *Condicional Simple:
            if (condición){
                Bloque de código
            }
        *Condicional if...else:
            if (condición){
                Bloque de código #1
            }else{
                Bloque de código #2
            }
        *Condicionales if ...else ... if ... :
            if (condición #1){
                Bloque de código #1
            }else if (condición #2){
                Bloque de código #2
            }else if ...{

            }...

            }else{
                Bloque código N
            }   
*/


/* 
    Ejemplo: Realice un programa que pida la edad de un usuario y verifique
    si este es mayor de edad, menor de edad o ingreso una edad inválida.

*/

/* var edad = parseInt(prompt("Ingrese su edad, por favor."))

if (edad >= 18){
    console.log("Es mayor de edad")
}else if (edad >= 0 && edad < 18){
    console.log("Es menor de edad")
}else{
    console.log("Ingreso una edad inválida")
} */

/*
    Ejercicio 1: Escribir un programa que pida al usuario dos números y muestre
    por pantalla su división. Si el divisor es cero, el programa debe mostrar un 
    mensaje de error.    
*/


/* var numero1 = parseInt(prompt("Ingrese el primer número"))
var numero2 = parseInt(prompt("Ingrese el segundo número"))

if (numero2 != 0){
    var resultado = numero1 / numero2
    console.log("El resultado de la divisón es: " + resultado)
}else{
    console.log("ERROR. EL DIVISOR NO PUEDE SER CERO")
} */

/*
    Ejercicio 2: Realice un programa que imprima "Capicúa" si un número de entrada
    de tres dígitos es capicúa, o "No lo es" en caso contrario. Un número es capicúa
    si se escribe igual al derecho y al revés. Por ejemplo, 545 es un número capicúa.
*/

var numero = parseInt(prompt("Ingrese un número, por favor"))

var a = numero % 10
var b = parseInt(numero / 10) % 10
var c = parseInt(numero / 100) % 10

var retroceso = a*100 + b*10 + c

if (numero === retroceso){
    console.log("Capicúa")
}else{
    console.log("No lo es")
}




















































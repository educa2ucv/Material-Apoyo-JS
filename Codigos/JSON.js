/*
    Ejemplo: Realice una función que obtenga un arreglo de números y devuelva
    en un JSON su suma total, multiplicación total y cantidad de números que conformen 
    al arreglo.
*/

const principal = (numeros) => {
    var sumaTotal = 0
    var multiplicacionTotal = 1
    for (var numero of numeros){
        sumaTotal += numero
        multiplicacionTotal *= numero
    }
    
    return datos = {
        'Suma_Total' : sumaTotal,
        'Multiplicacion_Total' : multiplicacionTotal,
        'Cantidad_de_Numeros' : numeros.length
    }
}

let arr = [3,9,10,5,55,120,64]
let resultado = principal(arr)

console.log(resultado)
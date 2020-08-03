/*
    Estructura de control de flujo SWITCH.
    
    switch (expresión){
        case 1:
            Bloque de código #1
            break
        case 2:
            Bloque de código #2
            break
        case 3:
            Bloque de código #3
            break
        ...
        default:
            Bloque de código por defecto
    }
*/

/*
    Ejercicio 3: Haga un programa que reciba como entrada un número entre 1 y 12 e
    imprima el nombre del mes correspondiente. Tome en cuenta valores erróneos en la
    entrada.
*/

var mes = parseInt(prompt("Ingrese un número de mes."))

switch (mes){
    case 1:
        console.log('Enero')
        break
    case 2:
        console.log('Febrero')
        break
    case 3:
        console.log('Marzo')
        break
    case 4:
        console.log('Abril')
        break 
    case 5:
        console.log('Mayo')
        break 
    case 6:
        console.log('Junio')
        break 
    case 7:
        console.log('Julio')
        break 
    case 8:
        console.log('Agosto')
        break 
    case 9:
        console.log('Septiembre')
        break 
    case 10:
        console.log('Octubre')
        break 
    case 11:
        console.log('Noviembre')
        break 
    case 12:
        console.log('Diciembre')
        break 
    default:
        console.log('El número ingresado no corresponde a un mes del año')
}























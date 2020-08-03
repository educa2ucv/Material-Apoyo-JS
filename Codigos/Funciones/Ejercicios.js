/*
    Ejercicio 1: Realizar una función que pida números enteros positivos 
    finalizado en '-1' al usuario e indicar el promedio 
    de todos los números indicados por el usuario.
*/

/* function promedio (){
    var numero = parseInt(prompt('Ingrese un número por favor.'))
    var contadora = 0
    var suma = 0
    while (numero != -1){
        contadora = contadora + 1
        suma = suma + numero
        numero = parseInt(prompt('Ingrese otro número, por favor.'))
    }
    return suma / contadora
}

let resultado = promedio()
console.log("El promedio de todos los números ingresados es: " + resultado) */

/*
    Ejercicio 2: Escribir una función que pida las notas de cinco (5) asignaturas de un
    estudiante (Matemáticas, Programación, Lenguaje, Historia e Inglés) e indique
    la cantidad de materias aprobadas y de materias reprobadas.
    
    Considere entradas erróneas y que un estudiante aprueba una asignatura si su
    nota es mayor o igual a 10 y menor o igual a 20.
*/

function notas (){
    var bandera = false
    var contadorAprobados = 0
    var contadorReprobados = 0
    for (var i = 0; i < 5; i = i + 1){
        let nota = parseFloat(prompt('Ingrese su nota, por favor'))
        if (nota > 0){
            if (nota >= 10 && nota <= 20){
                contadorAprobados = contadorAprobados + 1
            }else if (nota < 10){
                contadorReprobados = contadorReprobados + 1
            }
        }else{
            console.log('ERROR')
            bandera = true
            break
        }
    }
    if (!bandera){
        console.log("La cantidad de materias aprobadas es: " + contadorAprobados)
        console.log("La cantidad de materias reprobadas es: " + contadorReprobados)
    }
}

notas()































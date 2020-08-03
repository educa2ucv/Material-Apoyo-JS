class Curso{

    constructor (nombre){
        this.nombre = nombre
    }

    saludo(){
        console.log('Hola, estás realizando el curso de: ' + this.nombre)
    }
}

let cursoJS = new Curso('Curso de Programación en JS')
cursoJS.saludo()

let cursoPython = new Curso('Curso Básico de Python')
cursoPython.saludo()
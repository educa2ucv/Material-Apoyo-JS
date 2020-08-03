class Persona{

    constructor (nombre,edad,pais){
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }

    saludo(){
        console.log('Mi nombre es: ' + this.nombre + 'y soy una Persona')
    }
}

class Hija extends Persona{

    constructor (nombre,edad,pais,comidaPreferida){
        super(nombre,edad,pais)
        this.comidaPreferida = comidaPreferida
    }

    saludo2(){
        console.log('Mi nombre es: ' + this.nombre + ' y soy una clase Hija')
    }

    comida(){
        console.log('Mi comida es preferida es: ' + this.comidaPreferida)
    }
}

let padre = new Persona('Alexanyer',21,'Venezuela')

let hija = new Hija('Alejandra',22,'Italia','Pizza')
hija.saludo()
hija.saludo2()
hija.comida()
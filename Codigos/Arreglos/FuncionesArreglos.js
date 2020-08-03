let arr = [1,2,3,4,5,6]
/* 
let arr2 = arr.filter( (elemento) => elemento % 2 != 0)

let elementoEncontrado = arr.find( (elemento) => elemento == 40)

arr = arr.map((elemento) => elemento * 2) */

arr.forEach(function (elemento){
    if (elemento % 2 == 0){
        console.log(elemento)
    }
})

for (var i = 0; i < arr.length; i = i + 1){
    if (arr[i] % 2 == 0){
        console.log(arr[i])
    }
} 
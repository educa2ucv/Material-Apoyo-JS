var contador = 0
for (var i = 0; i < 100; i = i + 1){
    if (contador != 40){
        console.log(i)
        contador = contador + 1
    }else{
        break
    }
}
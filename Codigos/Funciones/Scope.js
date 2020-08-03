function foo (arg){
    var resultado = 40
    if(arg == 1){
        let scope = 'A'
        console.log(scope)
    }else{
        let scope = 'B'
    }
    console.log(scope)
}

foo(1)
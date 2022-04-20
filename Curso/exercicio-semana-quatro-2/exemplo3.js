function tabuada(num){
    const arr = [1,2,3,4,5,6,7,8,9,10]
    let resultado = []
    for(var i=0; i<arr.length; i++){
        calcula = num*arr[i]
        resultado.push(calcula)

    }
return resultado
}

console.log(tabuada(7))
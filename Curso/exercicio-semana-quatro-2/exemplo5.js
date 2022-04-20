function factorial(num){
   let factorial = num - 1
   let resultado = num * factorial
    while (factorial != 1){
        factorial -= 1
        resultado *= factorial

    }
    return resultado
}
console.log(factorial(2))
function verificaMaiorNumero(num1,num2){
    if (num1 > num2){
        return `O maior número é o ${num1}`
    }
    else if (num2 > num1){
        return `O maior número é o ${num2}`
    }
    else if (num1 == num2){
        return `O número ${num1} é igual ao número ${num2}`
    }
}
console.log(verificaMaiorNumero(3,5))
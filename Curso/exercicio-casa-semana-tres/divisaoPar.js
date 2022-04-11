function divisaoPar(num1,num2){
    divide = num1 / num2
    if (num1 % num2 == 0){
        return `A divisão do ${num1} pelo ${num2} é ${divide}. E o resto é zero. Esse número é par`
    }
    return `A divisão do ${num1} pelo ${num2} é ${divide}.`
}
console.log(divisaoPar(3,4))
// let semana

// function soma(num1,num2,num3,num4){
//     return num1 + num2 + num3 + num4
// }

// console.log(soma(1,5,6,7))

// function comprovaMaiorIdade(idade) {
//     if (idade >= 18) {
//         console.log('maior de idade')
//     } else {
//         console.log('menor de idade')
//     }
// }

// comprovaMaiorIdade(6)


// function resultadoBoletim(nota1,nota2,nota3,nota4){
//     let media = (nota1+nota2+nota3+nota4)/4
//     if (media >= 7 && media <= 10) {
//         return `Parabéns! Você está Aprovada. Sua média foi de: ${media}`
//     } else if (media >= 4 && media < 7) {
//         return `Estude mais! Você está de recuperação. Sua média foi de: ${media}`
//     } else if (media < 4 && media >= 8) {
//         return `Você está reprovada. Sua média foi de: ${media}`
//     }
// }
// console.log(resultadoBoletim(7,10,4,10))

//título de eleitor

// function permiteTitulo(idade) {
//     if ((idade >= 16 && idade < 18) || idade >= 70) {
//         return `Você tem ${idade} é permitido, mas não obrigatório, obtirar o título de eleitor!`
//     }
//     else if (idade >= 18 && idade < 70){
//         return `Você tem ${idade} é OBRIGATÓRIO tirar o título de eleitor!`
//     } else {
//         return `Você tem ${idade}. Procure o TRE.`
//     }
// }

// console.log(permiteTitulo(12))

function verificaFeriados (mes) {
    switch(mes){
        case 'fevereiro':
            return 'é carnaval'
        case 'junho':
            return 'é são joão'
        case 'dezembro':
            return 'é natal'
        default:
            return 'não é um mês de festa'
    }
}

console.log(verificaFeriados('dezembro'))
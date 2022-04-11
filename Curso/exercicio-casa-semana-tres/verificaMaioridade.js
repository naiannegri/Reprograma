function verificaMaioridade(anoAtual, ano){
    idade = anoAtual-ano
    if (idade >= 18){
        return `Você tem ${idade} e é maior de idade`
    }
    else{
        return `Você tem ${idade} e é menor de idade`
    }
}
console.log(verificaMaioridade(2022,1992))
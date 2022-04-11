function mediaAluno(nota1,nota2,nota3){
    media = (nota1+nota2+nota3)/3
    if (media >= 7){
        return `Aprovada! Sua média é de ${media}`
    }
    else if (media >= 5 && media < 7){
        return `Recuperação! Sua média é de ${media}`
    }
    else if(media < 5){
        return `Reprovada! Sua média é de ${media}`
    }
}
console.log(mediaAluno(5,7,9))
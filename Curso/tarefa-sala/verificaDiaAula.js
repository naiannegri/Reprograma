function diasAula (dia) {
    if ((dia == "sábado") || ( dia == "quarta")) {
        return `Hoje é ${dia}. Dia de aula!`
    }
    else if (dia == "segunda"){
        return `Hoje é ${dia}. Dia de orientação educacional!`
    }
    else if ( dia == "quinta"){
        return `Hoje é ${dia}. Dia de Plantão!`
    } else {
        return `Hoje é ${dia}. Não temos encontro mas aproveite para revisar!`
    }
}

console.log(diasAula("terça".toLowerCase()))
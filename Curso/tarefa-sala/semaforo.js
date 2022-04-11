function semaforo(cor) {
    if (cor == "vermelho"){
        return `O sinal está ${cor}. Pare!`
    }
    else if (cor == "amarelo") {
        return `O sinal está ${cor}. Atenção!`
    }
    else if (cor == "verde"){
        return `O sinal está ${cor}. Pode seguir!`
    }
}

console.log(semaforo("verde"))
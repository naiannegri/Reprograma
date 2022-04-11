function calculaIMC(peso, altura){
    const alturaQuadrado = Math.pow(altura, 2)
    const valorIMC = peso / alturaQuadrado
    return `O resultado é ${valorIMC.toFixed(2)}`
}

console.log(calculaIMC(52,1.64))
//5 - Receba do usuários 3 números e calcule a média entre eles.

let valores = [58, 65, 78]
const mediaTotal = (valores.reduce((a,b) => a+b,0))/valores.length
console.log(`A média dos valores ficou em: ${mediaTotal}`)
//interpolar
//console.log(`Hello ${myName}`)
//objetos
var pessoa = {
    name: "A",
    age: 22,
    role: "dev",
    isTeacher: true
}
//console.log(pessoa.isTeacher)

//array
var alunas = ["aila", "maria", "paula"]
var idades = [32, 40, 19]

//funções

function soma(a,b){
    return a+b
}
//console.log(soma(2,6))

//typeof
var age = 32
//console.log(typeof age)
var nome = "simara"
//console.log(typeof nome)
//console.log(typeof lastName)
let myObject = {
    nome: "simara",
    age: 32
}
//console.log(typeof myObject)
let object = null
//console.log(typeof object)
let anyEmptyList = []
//console.log(typeof alunas)

//Variáveis: não pode iniciar com números, não ppode ter espaço, não pode usar palavras reservadas, camelCase, snake_case
//var - nao se usa mais, usa-se o let
//let 
//const - o valor n modifica, precisa inicializar com um valor
//se const receber um objeto é possível modificar seu valor
//ECMAScript - novo padrão de script
var idadeExemplo  //undefined
let minhaIdade //undefined
minhaIdade = 29
minhaIdade = 30
const meuNome = "naiane"

//scope - aceita o let mas nao const 
function sum(age){
    return age + 1
}

//operadores
//unário - um único operando que inverte de sina
let x = 1
x = -x

//exemplo 1 - let e const
nome = "simara"
nome = "lais"
const myName = "Beatrix"
const myName2 = "Elijane"
//console.log(nome, myName, myName2)

//exemplo 2 - concatenar x interpolar
let firstName = "Naiane"
let lastName = "Negri"
const fullName = "O nome completo é " + firstName + " " + lastName
const otherFullName = `O nome completo é ${firstName} ${lastName}`
//console.log(fullName, otherFullName)

//exemplo 3 - média
let mediaValoresAleat = (5+7+8+6+3)/5
//console.log(mediaValoresAleat)

//exemplo 4 - quero lucrar
let bicicleValue = (300/0.6)*1.25
console.log(`O valor para lucrar 25% do valor total de compra é: R$ ${bicicleValue}`)

//exemplo 5 - soma
let value1 = 5
let value2 = 6
let resultSum = value1+value2
//console.log(resultSum)

//exemplo 6 - vender notebook
let valueSell = 300-(300*0.25)
//console.log(valueSell)

//exemplo 7 - metros para mm
let metersValue = 9
let mmValue = metersValue/1000
//console.log(mmValue)

//exemplo 8 - calcular IMC
let alturaMetros = "1.64"
let pesoKg = "51"
let IMC = pesoKg/(alturaMetros**2)
//console.log(IMC)

//exemplo 9 - recebe 4 notas, calcula a média e exibe no console
let nota1 = 5
let nota2 = 6
let nota3 = 7
let nota4 = 8
console.log("A média das notas é:", (nota1+nota2+nota3+nota4)/4)


//exemplo 10 - conversor de temperatura
let temperaturaAgora = 20
//console.log('A temperatura em Fahrenheit é: ', (temperaturaAgora*9/5)+32)
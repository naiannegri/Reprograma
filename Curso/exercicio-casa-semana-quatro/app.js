
const livros = require("./database.js");

// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')
// const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// parser.on('data', console.log)
var readline = require('readline')
var search = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var response
search.question("Escolha uma opção: Categoria - Escolha: 'Literatura' ou 'Auto-ajuda', Recomendações, Lista de Desejos ", function (answer) {
    response = answer
    outside();
    search.close();
});


outside = function(){
if (response == 'Literatura' || response == 'Auto-ajuda') {
        for (i = 0; i < livros.length; i++){
            if (Object.values(livros[i]).includes(answer)){
                console.log(livros[i])
            }
    }}

if (response == 'Recomendações'){
        for (i = 0; i < livros.length; i++){
            if (livros[i]["leu"] == true && livros[i]["recomenda"] == true){
                console.log(livros[i])
            }
        }
    
}

if (response === 'Lista de Desejos'){
        for (i = 0; i < livros.length; i++){
            if (livros[i]["leu"] == false){
                console.log(livros[i])
            }
        }
}

if (response == ""){
    let arr = []
    for (i = 0; i < livros.length; i++){
        arr.push(livros[i].paginas)
    } 
    let lowestToHighest = arr.sort((a, b) => a - b)
    console.log(lowestToHighest)
    arr = arr.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
 });
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < livros.length; j++)
            if (livros[j].paginas == arr[i]){
                console.log(livros[j])
        }
    }
    
}
}


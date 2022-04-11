function parImpar (number){ 
    if ((number % 2) == 0){
        return `O número ${number} é par`
    }
    else {
        return `O número ${number} é impar`
    }
}

console.log(parImpar(7))
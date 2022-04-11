function calc(oper,number1,number2){ 
    if (oper == "multiplicação"){ 
        return number1*number2
    }
    else if(oper == "divisão") {
        return number1/number2
    }
    else if(oper == "soma"){
        return number1+number2
    }
    else if(oper == "subtração") {
        if (number1 > number2){
            return number1 - number2
        }else {
            return number2 - number1
        }
    }
}

console.log(calc('subtração',2,1))
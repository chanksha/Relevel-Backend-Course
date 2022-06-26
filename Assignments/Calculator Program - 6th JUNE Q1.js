// Calculator using switch case


function calculator(num1,num2,operator) {
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator == "-") {
        return num1 - num2;
    }
    else if(operator == "*") {
        return num1 * num2;
    }
    else if(operator == "/") {
        return num1 / num2;
    }
    else{
        return "Enter Valid Arguments";
    }
}

console.log(calculator(4,4,"*"));
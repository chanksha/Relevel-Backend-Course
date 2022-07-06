//Given a number n, calculate n!



function factorial(n) {
    let sum = 1; // Initalise a variable with value 1 to store the sum of iterations
    for (let i = n; i > 0; i--) {
        sum = sum * i; //with each iteration the value of "i" is multiplied with perviously calculated value of "sum".
    }
    console.log(sum);
}

factorial(4);
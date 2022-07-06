// Given an integer n, write a function that returns the count of trailing zeroes in n!.
// Example-1
// Input: 5
// Output: 1



// Initially we have made a program to find factorial of
function factorial(n) {
    let sum = 1; // Initalise a variable with value 1 to store the sum of iterations
    for (let i = n; i > 0; i--) {
        sum = sum * i; //with each iteration the value of "i" is multiplied with perviously calculated value of "sum".
    }
    return sum;
}

function trailingZeros(n) {
    let count = 0;
    let number = factorial(n);
    while(number != 0) { 
        let lastDigit = number % 10;
        if(lastDigit == 0) {
            number = Math.floor(number/10);
            count++;
        }
        else break;
    }
    return count;
}

console.log(trailingZeros(20));
// Write a function that takes two parameters num and k and returns the value of Binomial
// Coefficient
// C(num, k)
// Sample input: num = 6, k = 3
// Sample output: 20


// Initially we have made a program to find factorial of
function factorial(n) {
    let sum = 1; // Initalise a variable with value 1 to store the sum of iterations
    for (let i = n; i > 0; i--) {
        sum = sum * i; //with each iteration the value of "i" is multiplied with perviously calculated value of "sum".
    }
    return sum;
}

function BinomialCoefficient(num,k) {
    if(num === 0 || k == num) console.log(1);
    if(k > num) console.log(0);
    console.log(factorial(num)/(factorial(k)*(factorial(num-k))))
}

BinomialCoefficient(6,3);


//---------------------using recursion-----------------------------


function recursiveBinomialCoefficient(num,k) {
    if(k == 0 || k == num) return 1;
    if(k > num) return 0;
    return recursiveBinomialCoefficient(num-1,k-1) + recursiveBinomialCoefficient(num-1,k);  
}

console.log(recursiveBinomialCoefficient(6,3));
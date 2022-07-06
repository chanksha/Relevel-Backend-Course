// Problem Statement:
// Given a number A which is an even integer, you need to print two prime numbers whose sum will be
// equal to A.
// Constraint: A>2
// Input - 4
// Output - 2,2



//Function to determine whether a number is prime or not
function isPrime(n) { 
    let flag = true;
    for(let i = 2; i < Math.sqrt(n); i++) {
        if(n % i === 0) {
             flag = false;
             break;
        }
    }
    return flag;
}


//main function to determine the pair of primes 
function primePair(A) {
    if(A % 2 === 0) {   //checking if given number is even or not.
        let a = 2, b = 0;     //Initaialise the variables to denote the pair.
        while(a <= A) {   //Using while loop till the value of A.
            b = A - a;                                           
            if(isPrime(b) == true && isPrime(a) == true) {   //if both a and b are prime then print them.
                console.log(a,b);
            }
            a += 1
        }
    }
    else {
        console.log("Not an even Number");
    }
}

primePair(98);
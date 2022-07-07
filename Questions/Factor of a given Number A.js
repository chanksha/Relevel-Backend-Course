// Factor

// Problem Statement:
// Given a number A you are supposed to take the digits of that number, and find a permutation such
// that 60 becomes a factor of that permutation. If there exists such a permutation then return 1 else 0.
// Input - 2340
// Output - 1

function factorFinder(number) {
    let sum = 0;
    last = false;
    secondLast = false;
    while(number != 0) {
        let digit = number % 10;
        number = Math.floor(number/10);
        if(digit % 2 == 0 && (digit > 0 || last)){
            secondLast = true;
        }
        if(digit == 0) {
            last = true;
        }
        sum += digit;
    }
    if(sum % 3 == 0 && last && secondLast) return 1;
    else return 0;
}


console.log(factorFinder(2340));


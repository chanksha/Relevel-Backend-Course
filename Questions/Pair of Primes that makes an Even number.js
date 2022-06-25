// functions in brief

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

function primePair(A) {
    if(A % 2 === 0) {
        let a = 2, b = 0;
        while(a <= A) {
            b = A - a;
            if(isPrime(b) == true && isPrime(a) == true) {
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
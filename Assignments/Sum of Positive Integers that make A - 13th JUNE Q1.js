// Given a positive integer A, find a pair of integers a, b such that
// a and b are positive
// a <= b
// a^2 + b^2 = A
// 0<=A<=100000

function sumOfPair(A) {
    let a = 0, b = 0;
    while (a <= b) {
        b = Math.sqrt(A - Math.pow(a,2));
        if(b % 1 == 0) {
            console.log(a,b);
        }
        a += 1;
    }
}

sumOfPair(50);

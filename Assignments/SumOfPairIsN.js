// pair of integers that makes a number A.


function pairOfIntegers(A) {
    let a = 0, b = 0;
    while(a <= b) {
        b = Math.sqrt(A - Math.pow(a,2));
        if(b % 1 === 0) {
            console.log(a,b);
        }
        a += 1;
    }
}
pairOfIntegers(100);









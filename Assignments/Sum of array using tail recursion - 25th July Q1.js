// Take an array of size 10. Calculate sum of all array elements using tail recursion.
let arra = [1,1,1,1,1,1,1,1,1,1,1];
function recusiveSum(array,n) {
    if(n <= 0) {
        return 0;
    }
    return (recusiveSum(array,n-1) + array[n-1]);
}

let n = arra.length;
console.log(recusiveSum(arra,n));
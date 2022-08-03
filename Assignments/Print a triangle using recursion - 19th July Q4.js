// Question 4: Write a program using recursion to print a triangle of length n.
// Input: 5
// Output:
// * *
// * * *
// * * * *
// * * * * *


function trianglePattern(N) {
    if(N === 1) {
        return N;
    }
    else {
        trianglePattern(N-1);
        console.log('* ');
    }
}
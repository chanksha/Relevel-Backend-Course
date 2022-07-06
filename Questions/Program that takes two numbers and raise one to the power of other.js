// Write a function that takes two numbers x and y and calculates x^y


function pow(x,y) {
    sum = 1;
    while(y>0) {
        sum = sum*x;
        y--;
    }
    return sum;
}

console.log(pow(3,3));
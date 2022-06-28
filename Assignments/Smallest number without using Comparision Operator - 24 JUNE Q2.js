// Given 3 numbers. You need to find the smallest of three numbers without using comparison
// operators
// Input -> 12,44,2
// Output -> 2"

function smallestNum(num1,num2,num3) {
    let counter = 0; //Initialise a counter variable with 0 value
    while(num1>0 && num2>0 && num3>0) {
        num1--; 
        num2--;
        num3--; //Every iteration decrease value of numbers 
        counter++; //And increase value of counter 
    }
    return counter; //when a number becoomes 0 loop breakes and counter is printed
}

console.log(smallestNum(79,45,33));


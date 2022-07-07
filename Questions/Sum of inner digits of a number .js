// Sum of Digits

// Problem Statement:
// Given a positive number you need to write a program to find the sum of the inner digits of that
// number.
// Input - 2124
// Output - 3
// Explanation - 1:
// The Inner digits of the number 2124 are 1 and 2 whose sum is 3
// Explanation - 2:
// The Inner digits of the number 70 is None therefore the output will be -1.
// Note: Same is the case for number with single digit

function innerPeace(number) {
    let innerSum = 0;
    if(number<99) console.log(-1);
    else {
        
        while(number>99) {
            number = Math.floor(number/10);
            let digit = number % 10;
            innerSum += digit;
        }
    console.log(innerSum);    
    }
}

innerPeace(1450);

// Write a function that compares two numbers and returns the larger of the two.
// Bonus: Output appropriate message if numbers cant be compared or are equal

function largerNumber(num1,num2) {
    if(num1 > num2) {
        console.log(num1);
    }
    else if(num2 > num1) {
        console.log(num2);
    }
    else if(num1 == num2) {
        console.log("Number are Equal");
    }
    else {
        console.log("Can't be Compared");
    }
}
largerNumber(3,3);



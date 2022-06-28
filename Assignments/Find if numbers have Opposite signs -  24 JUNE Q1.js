// Given 2 numbers as input. You need to find if they have opposite signs or not.
// Input -> +123, -12
// Output -> true"


function sameSigns(num1,num2) {
    if(num1 > 0 && num2 > 0) {
        console.log(false);
    }
    else if(num1< 0 && num2 < 0) {
        console.log(false);
    }
    else
        console.log(true);
}


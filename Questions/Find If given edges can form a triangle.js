// Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?
// (Students are not expected to take any user input, solve the problem using hardcoded value)
// Example-1
// Input: a=7,b=10,c=5
// Output: Triangle



function possibleTriangle(a, b, c)
{
if ( b + c <= a || a + c <= b || a + b <= c ) return false;
else return true;
}

console.log(possibleTriangle(1,3,3));


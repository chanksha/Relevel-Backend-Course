// Requirements: "Write a method that accepts an array of integers and updates every element with multiplication of previous and next elements.

// Note:
// First element is replaced by multiplication of first and second.
// Last element is replaced by multiplication of last and second last.

// Example:

// Input:
// a = [2, 3, 4, 5, 6]
// n = a.length

// Output:
// [6, 8, 15, 24, 30]


array = [2,3,4,5,6];

function arrayUpdater(a) {
    b=[];
    for(let i = 0; i <= a.length - 1; i++) {
        if(a[i-1] == null) {
            b[i] = a[i+1] * a[i];
        }
        if(a[i+1] == null) {
            b[i] = a[i] * a[i-1];
        }
        if(a[i-1] != null && a[i+1] != null) {
            b[i] = a[i+1] * a[i-1];
        }
    }
    console.log(b);
}

arrayUpdater(array);





//-----------------------------------------negative to the end---------------------------------------------------------
// Requirements: "Practice Problem-2:
// Move all negative numbers to the end and positive to the beginning of the array without using any predefined sorting method

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all positive numbers appear before all negative numbers.
// "


let brr = [-5, 3,-4,88,-9,-10,21,5,6];

function negativeToTheLeft(a) {
    let b = [], c = [];
    for(let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            b.push(a[i]);
        }
        else {
            c.push(a[i]);
        }
    }
    return c.concat(b);
}

console.log(negativeToTheLeft(brr));
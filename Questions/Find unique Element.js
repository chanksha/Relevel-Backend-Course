// Given an array of length N, where every element is present twice and only one element is
// present once. Find the unique element.

// Sample input : N = 5, Array = [3,2,1,2,3]
// Sample output : 1



let Array = [3,2,1,2,3]

//using XOR operator
function checkDuplicated(array) {
    let result = 0;
    for(let element of array) {
        result = result ^ element;
        }
        return result
    }
console.log(checkDuplicated(Array));


//using an object 
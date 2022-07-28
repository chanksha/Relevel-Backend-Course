// 1. Write a program to multiply the value in the given array and return a result (use array functions)
// Array = [2,3,4,5,6,7,8]


let array = [2,3,4,5,6,7,8]

function multiplyAll(arr) {
    let result = arr.reduce((accumulator,element) => { 
        return accumulator * element;
        },1);  
    console.log(result);
}

multiplyAll(array);
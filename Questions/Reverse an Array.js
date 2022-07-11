// Reverse Array
// Problem – Given an array of numbers. You need to reverse the array. For example –
// Input – [1,2,3,4,5]
// Output – [5,4,3,2,1]

let inp = [1,2,3,4,5];

function reverseArray(array,start,end) {
    let temp = 0;
    if(start >= end) return;
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    reverseArray(array,start+1,end-1);
}

reverseArray(inp,0,4);
console.log(inp);
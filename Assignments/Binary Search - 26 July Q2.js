// Requirements: "Write a JavaScript program for binary search.
// Sample array: [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'"


let a = [0,1,2,3,4,5,6];

function binarySearch(arr,element,start,end) {
    if(start>end) {
        return "Element not found in array";
    }
    let mid = Math.floor((start + end)/2);
    if (arr[mid] === element) {
        return element
    }
    if(arr[mid] > element) {
        return binarySearch(arr,element,start,mid-1);
    }
    else{
        return binarySearch(arr,element,mid+1,end);
    }
}

console.log(binarySearch(a,2,0,6));
//Find intersection of 2 sorted arrays given to you below.

//Input A:[1,2,3,3,4,5,6] B:[3,3,5]
//Output: [3,3,5]

let A = [1,2,3,3,4,5,6], B = [3,3,5];
function findIntersection(arr1,arr2) {
    let result = [];
    let i=0,j=0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i]==arr2[j]){
            result.push(arr1[i]);
            i++
            j++;
        }
        else if(arr1[i]<arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return result;
}

console.log(findIntersection(A,B));
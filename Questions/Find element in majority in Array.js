// An array on N elements is given. Find the element in majority. An element is considered
// in majority whose count is greater than n/2.
//EXAMPLE
//Input: [3,1,3,3,2]
//Output: 3

let aa=[3,1,3,3,2];
function majorityElement(array) {
    let count = 0;
    let candidate = -1;
    for(let i = 0; i< array.length; i++) {
        if(count === 0) {
            candidate = array[i];
            count = 1;
        }
        else {
            if(candidate === array[i]){
                count++;
            }
            else {
                count--;
            }
        }
    }
    count = 0;
    for(let i = 0; i< array.length;i++){
        if(array[i] === candidate) count++;
    }
    return count*2 > array.length ? candidate : - 1;
}

console.log(majorityElement(aa));

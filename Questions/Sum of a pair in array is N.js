// Find pair of elements in array A such that their sum of the pair is equal to N.

//Input: A = [10,20,10,40,50,70], N=50;
//Output: 2,3
let A = [10,20,10,40,50,70];
function findPair(arr, N) {
    let temp = new Array(arr.length);
    for(let  i = 0; i < arr.length; i++) {
        temp[i] = [arr[i],i];
    }

    temp.sort((a, b) => a[0] - b[0]);
    let i = 0, j = temp.length - 1;
    while(i<j) {
        if(temp[i][0] + temp [j][0] > N) {
            j--;
        }
        else if(temp[i][0] + temp [j][0] === N) {
            return [temp[i][1],temp[j][1]];
        }
        else {
            i++;
        }
    } 

}
console.log(findPair(A,50));
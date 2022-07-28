//Print all the subarrays of a given Array.
//Input:[1,2,3]
//Output:[1],[2],[3],[1,2],[2,3],[1,2,3];
//indexes in a subarray should be consecutive


function allSubarray(array) {
    for(let i = 0; i< array.length; i++) {
        let temp = [array[i]];
        console.log(temp);
        for(let j = i+1; j< array.length; j++) {
            temp.push(array[j]);
            console.log(temp);
        }
    }
}

allSubarray([1,2,3,4]);

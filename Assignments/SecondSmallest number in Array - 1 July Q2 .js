// Write a program to find the second smallest number from array using loops concept
// Input -> [11,34,54,22,13,78]
// Output -> 13


a = [11,34,54,22,13,78];
function secondSmallest(array){
    let temp = 0;
    for(let i = 1; i< array.length; i++) {
        for (let j = 0; j < i; j++) {
            if(array[j]>array[i]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array[1]);
}

secondSmallest(a);
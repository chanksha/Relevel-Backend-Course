// Requirements: "Given an array having 0,1 as input( We need to write a function that sorts the array in ascending
//     order without using inbuilt sort function
//     Input Array -> [0,1,1,0,1,0,0,15
//     Output -> [0,0,0,0,1,1,1,15"

a = [0,1,1,0,1,0,0,15];
function ascendingSort(array){
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
    console.log(array);
}

ascendingSort(a);


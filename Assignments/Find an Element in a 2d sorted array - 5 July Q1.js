// Requirements: "Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order
// and the first integer of each row is greater than the last integer of the previous row.

let a = [[19,28,37],
         [46,55,64],
         [73,82,91]]
function searchElement(element,array) {
    let count = 0; let flag = false;
    for(let i = 0; i <= array.length-1; i++) {
        if(element <= array[i][array[i].length-1]) {
            while(element>array[i][count]) {
                count++;
            }
            if(element == array[i][count]) {
                flag = true;
                console.log(`Element found in array ${[i,count]}`);
            }
        }
        else continue;

    }
    if(flag == false) console.log("Element not found in Array.");

}
searchElement(73,a);

// Minimum and Maximum Element
// Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
// Input – [2,3,15,6]
// Output –
// Minimum element - 2
// Maximum element - 15


let inp = [1,2,3,15,6,23];
function MaxMin(array) {
    let Max = array[0], Min = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > Max) {
            Max = array[i];
        }
        if(array[i] < Min) {
            Min = array[i];
        }
    }
    console.log(`Minimun Element - ${Min}`);
    console.log(`Maximum Element - ${Max}`);
}

MaxMin(inp);


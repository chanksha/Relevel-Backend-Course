// ------------------------------------program to Reverse ana array--------------------------------------------------------------



let array = [1,2,3,4,5];

function reverseArray(array) {
    return array.length < 2 ? array : [array.pop()].concat(reverseArray(array));
}

console.log(reverseArray(array));



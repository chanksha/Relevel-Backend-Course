// Requirements: "Given a 2D array, find the sum of the diagonal and the boundary elements of it.
// In the given matrix of size 5x5 the colored cell marks the diagonal and the boundary elements

// Input:
// A=[ [1,2,3,4,1],
// [5,6,7,8,2],
// [9,10,11,12,13],
// [13,14,15,16,15],
// [11,12,15,19,15],
// ]
// Output:
// 195
// Explaination:
// [1,2,3,4,1],

// Assignment Solutions

// [5,6,7,8,2],
// [9,10,11,12,13],
// [13,14,15,16,15],
// [11,12,15,19,15],
// Sum of the diagonal and the boundary elements is : 195"

A=[ [1,2,3,4,1],
    [5,6,7,8,2],
    [9,10,11,12,13],
    [13,14,15,16,15],
    [11,12,15,19,15],
];
function sumOfDandB(array) {
    let totalSum = borderSum(array) + diagonalSum(array);
    console.log(`Sum of the diagonal and the boundary elements is : ${totalSum}`);
}

function borderSum(array) {
    let i = 0, j = 0;
    let rowLen = array.length, colLen = array[i].length;
    let boundarySum = 0;
    for(i = 0; i < rowLen; i++) {
        for(j = 0; j < colLen; j++) {
            if(i == 0 || i == rowLen-1) {
                boundarySum += array[i][j];
            }
            else{
                boundarySum += array[i][0] + array[i][colLen-1];
                break;
            }
        }
    }
    return boundarySum;
}

function diagonalSum(array) {
    let i = 0;
    let rowLen = array.length;
    let digonalsSum = 0;
    for(i = 1; i < rowLen-1; i++) {
        digonalsSum += array[i][i] + array[rowLen-1-i][rowLen-1-i];
    }
    digonalsSum += - array[(rowLen-1)/2][(rowLen-1)/2]
    return digonalsSum;
}


sumOfDandB(A);
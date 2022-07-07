// Explode Bombs Problem.

// ● Given a matrix. There are bombs placed at some cells denoted by value -1. So,
// wherever a bomb is placed, the cells around it explodes which means there value
// gets incremented by 1 except if that is a bomb too. Initial value of all empty cells is
// assumed to be 0. So, print the final state of the matrix after all bombs explode.

function mineSweeper(array2D) {
    let i = 0, j = 0;
    let row = array2D.length, col = array2D[i].length;
    for(i = 0; i < row; i++) {
        for(j = 0; j < col; j++) {  
            if(array2D[i][j] == -1) {
                if(array2D[i][j-1] !== undefined && array2D[i][j+1] !== undefined) {
                    array2D[i][j-1] += 1;
                    array2D[i][j+1] += 1;
                }
                if(array2D[i][j-1] == undefined) array2D[i][j+1] += 1;
                if(array2D[i][j+1] == undefined) array2D[i][j-1] += 1;
            else continue;
            }
        }
    }
    return array2D;
}


//do a element based approach

let bombMatrix = [
        [0,-1,0],
        [1,0,0],
        [2,1,-1],
    ]

console.log(mineSweeper(bombMatrix));
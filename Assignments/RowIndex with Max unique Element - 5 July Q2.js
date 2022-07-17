// Requirements: 2. Find the row index which has maximum no. of unique elements in a matrix efficiently.

matrix = [[1,2,2,3],
         [2,3,1,4],
         [1,2,3,1],
         [3,2,3,1]]

function maxRowUniqueElements(matrix) {

    return matrix.map(function(inside) {
        let uniqueElements = Object.entries(inside.reduce((accumlator, element) => {
            if(accumlator[element]) {
                accumlator[element] = accumlator[element] + 1;
            } else {
                accumlator[element] = 1;
            }
            return accumlator;
        }, {})).reduce((accumlator, pair) => {
            if(pair[1] === 1) {
                return accumlator + 1;
            }
        }, 0);
        return uniqueElements;
    }).reduce((accumlator, element) => Math.max(accumlator, element), 0);
}

maxRowUniqueElements(matrix);


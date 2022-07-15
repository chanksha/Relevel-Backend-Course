// Requirements: "2) Given 2D Array( A Magic square is a 2D array having n rows and n columns which will be having
//     all elements as distinct and the sum of row, column or diagonal is equal to the same number
//     (You need to check whether that array is a magic square or not)"






// Returns true if mat[][] is magic
// square, else returns false.
function isMagicSquare(mat)
{
	let N = mat.length
	// sumd1 and sumd2 are the sum of the two diagonals
	let sumd1 = 0,sumd2=0;
	for (let i = 0; i < N; i++)
	{
		// (i, i) is the diagonal from top-left -> bottom-right
		// (i, N - i - 1) is the diagonal from top-right -> bottom-left
		sumd1 = sumd1 + mat[i][i];
		sumd2 = sumd2 + mat[i][N-1-i];
	}
	// if the two diagonal sums are unequal then it is not a magic square
	if(sumd1!=sumd2)
		return false;

	
	for (let i = 0; i < N; i++) {
		let colSum = 0;
		let rowSum = 0;
		for (let j = 0; j < N; j++)
		{
			rowSum += mat[i][j];
			colSum += mat[j][i];
		}
		if (rowSum != colSum || colSum != sumd1)
			return false;
	}
	return true;
}

// test above function
let mat = [[ 2, 7, 6 ],
		   [ 9, 5, 1 ],
		   [ 4, 3, 8 ]];

if (isMagicSquare(mat))
	console.log( "It is a Magic Square");
else
	console.log( "Not a magic Square");



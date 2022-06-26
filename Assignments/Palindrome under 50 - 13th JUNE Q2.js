// Create a program to print all the palindromes under 50.

function palindrome(N) {
    for(let i = 1; i <= N; i++) {
        let copy = i, temp = 0;
        while(copy > 0) {
            let digit = copy % 10;
            temp = temp * 10 + digit;
            copy = Math.floor(copy/10);
        }
        if(temp == i) {
            console.log(`${i} is a Palindrome.`);
        }
    }
}

palindrome(50);
// Write a function that takes a string and returns if string is a palindrome.

function recursivePlaindrome(word,first,last) {
    if(first === last) {
        return word;
    }
    else {
        if (word[first] == word[last]) {
            return recursivePlaindrome(word,first+1,last-1);
        }
        else return false;
    }
}

let word = "naian"
let last = word.length-1
console.log(recursivePlaindrome(word,0,last));
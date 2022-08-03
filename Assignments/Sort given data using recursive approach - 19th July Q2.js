// Question 2: Write a program to sort a given data using recursive approach

const arr = [2, 5, 100, 6, 85, 12, 45]
function sort(x, i = x.length - 1) {
    let tmp
    if (i == 0) {
        return x;
    }
    for (let j = i; j >= 0; j--) {
        if (x[j - 1] > x[i]) {
        tmp = x[j - 1];
        x[j - 1] = x[i];
        x[i] = tmp;
        }
    }
    return sort(x, i - 1);
}
const sorted_arr = sort(arr)
console.log(sorted_arr)
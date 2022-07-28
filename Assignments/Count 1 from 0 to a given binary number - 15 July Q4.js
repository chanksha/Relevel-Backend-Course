// 4. Ram got an assignment from his math teacher that he needs to get the number of 1’s from 0 to a
// given binary number. But it is very hard to find so write a program which helps Ram to find it very
// Quickly.
// Input Format
// The input should be only a binary number
// Output Format
// It should return number as output
// Sample Input 1 :
// 100
// Explanation: The binary number between 0 to 100 are
// 000
// 001
// 010
// 011
// 100
// In the above series 5 1’s are there.
// Output : 5


function oneCounter(n) {
    let q = [], count = 0;
    q.push("1");
    while(n--) {
        let s1 = q[0];
        q.shift();
        console.log(s1);

        let s2 = s1;
        q.push(s1+"0");
        q.push(s2+"1");

    }
    console.log(count);
}

oneCounter(10);
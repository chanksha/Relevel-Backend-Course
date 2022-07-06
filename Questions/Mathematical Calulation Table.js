//Write a program to create a Mathematical calculation table from 0 to given number n.


function table(number,n) { //number -> denotes which number you want table of | n -> denotes till where you want it
    for (i = 1; i <= n; i++) {
        console.log(`${i} times ${number} is ${number*i}`);
    }
}

table(5,10);
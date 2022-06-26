// Iterate from 1 to 100(using for loop and if else statement)
// and divide by 3, 5 and 15.

for(let i = 1; i <= 100; i++) {
    if(i % 15 == 0) {
        console.log("MindBuzz");
    }
    else if(i % 5 == 0) {
        console.log("Buzz");
    }
    else if(i % 3 == 0) {
        console.log("Relevel");
    }
    else {
        console.log(i);
    }
}

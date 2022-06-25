//----------------Problem Solving Questions-------------------------

let age = 23, votingAge = 18;
console.log((age > votingAge) ? "True" : "False");

//largest number among 3



let a = 25, b = 15, c = 20;

if(a > b && a > c){
    console.log(a);
} else if(b > a && b > c){
    console.log(b); 
} else{
    console.log(c);
}



// Classes required to complete 75%


let m = 100, n = 10;

requiredClasses = Math.ceil(0.75 * m);

if(n > requiredClasses){
    console.log(0+" Classes Required" );
}
else{
    console.log(requiredClasses - n + " More Classes Required");
}

// Quadratic equation to find roots 

let x = 1, y = 5, z = 1;
roots = y*y - 4*x*z

if(roots === 0){
    console.log(-y/2*x + " Are the 2 real roots");
}
else if(roots > 0){
    console.log((-y+Math.sqrt(roots))/2*x + " " + (-y - Math.sqrt(roots))/2*x + " Are the 2 roots ");
}
else{
    console.log("No Real roots present");
}
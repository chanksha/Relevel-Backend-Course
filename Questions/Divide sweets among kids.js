// Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an
// equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if
// it is possible to make such distribution or not based upon n number of pieces. I.e., possible
// outputs: `yes` or `no.`
// Example-1
// Input: 8
// Output: Yes
// Example-2
// Input: 7
// Output: No


//---------------------------------Solution-----------------------------------------------------------


function bantwara(sweets) {
    return (sweets < 1) ? "No Sweets to distribute." : (( sweets % 2 == 0) ? "yes" : "no");
    // if sweets are less than 1 returen "no sweets" else if sweets are even return "yes" if not then "no".
}

console.log(bantwara(0));

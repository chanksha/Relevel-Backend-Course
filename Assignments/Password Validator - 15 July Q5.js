// 5. Ram is a college student and he has to submit the final year project which is password validator.
// Write a program to help ram to Validate the given password.
// Constraint
// Valid password
// Password should contains uppercase letters
// Password should contains lowercase letters
// Password should contains symbols letters – !@#$%^&*()_+~?><:"{}|
// Password should contains number
// Invalid password
// Password should not contains uppercase letters
// Password should not contains lowercase letters
// Password should not contains symbols letters – !@#$%^&*()_+~?><:"{}|
// Password should not contains number
// Input Format
// N represent the number of passwords
// The input should be string separated by new line
// Output Format
// password is valid for valid password
// password is invalid for invalid password
// Sample Input 1:
// 3
// aahfD$jhk67,
// ghfjhagsju,
// hsjFG$**)&
// Output:
// aahfD$jhk67, is valid
// ghfjhagsju, is invalid
// hsjFG$**)& is invalid


function passwordValidator(password) {
    let i = 0;
    let characters = ' ';
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let UpperCaseflag = false, LowerCaseFlag = false, NumericalFlag = false;
    let SpecialFlag = specialChars.test(password);
    while(i < password.length) {
        characters = password.charAt(i);
        if(!isNaN(characters * 1)) NumericalFlag = true; 
        if(characters == characters.toUpperCase()) UpperCaseflag = true;
        if(characters == characters.toLowerCase()) LowerCaseFlag = true;
        i++;
    }
    if(SpecialFlag && UpperCaseflag && LowerCaseFlag && NumericalFlag) {
        console.log("Password is Valid");
    }
    else{
        console.log("Password is Invalid");
    }
}

passwordValidator("ghfjhagsju");
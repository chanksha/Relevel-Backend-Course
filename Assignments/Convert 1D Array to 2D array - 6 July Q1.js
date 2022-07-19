// Requirements: Given a 1D array of size 10 , convert it into a 2D array of size 2x5

let a = [1,2,3,4,5,6,7,8,9,10];

function arrayMod(array,part) {
    let temp = [];
    for(let i = 0; i < array.length; i += part){
        temp.push(array.slice(i,i+part));
    }
    return temp;
};

console.log(arrayMod(a,5));
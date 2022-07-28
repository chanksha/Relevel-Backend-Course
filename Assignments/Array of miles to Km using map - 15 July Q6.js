// 6. Write a function that converts an array of values from miles to kilometres using the map method. In
// the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this
// variable.

let arr = [1,2,3,4,5,6,7,8,9]
function milesToKilometers(array){
    let kmArray = array.map(item =>{
                return item *= 1.6;
    });
    let totalDistanceInKilometers = kmArray.reduce((accumulator,item) => {
        return accumulator += item
    })
    return Math.floor(totalDistanceInKilometers);
}

console.log(milesToKilometers(arr));


//----------------------Incomplete---------------------------
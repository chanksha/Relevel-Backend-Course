// Requirements: Program to demonstrate Object destructuring in nested objects



let bugatti = { //initialising a object "bugatti" with a nest object "speed".
        model: "chiron",
        speed : {
            top: "442 KMPH",
            horsepower: "1500"
        },
    Price: "$ 3.3M"
   };
   
   
let { //destructuring in the nested onject and reassigning the value to "carName", " topSpeed" and "EngineCC".
    model : carName,
    speed:{
        top : topSpeed,
        horsepower : EngineCC
    },
} = bugatti;

console.log(carName);
console.log(topSpeed);
console.log(EngineCC);
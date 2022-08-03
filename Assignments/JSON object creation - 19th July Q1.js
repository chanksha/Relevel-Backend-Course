// Question 1: Create a JSON object for a showroom of cars, who sells cars of different brands.
// JSON shall contain various details such as: car brand name, car models, price and few basic details.
// Also write a program to print details of most expensive car.



showroomOfCars = [
    {
       "Name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Price": 100000,
       "Origin":"USA"

    },
    {
       "Name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Price": 200000,
       "Origin":"USA"
    },
    {
       "Name":"plymouth satellite",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":318,
       "Horsepower":150,
       "Weight_in_lbs":3436,
       "Acceleration":11,
       "Price": 300000,
       "Origin":"USA"
    },
    {
       "Name":"amc rebel sst",
       "Miles_per_Gallon":16,
       "Cylinders":8,
       "Displacement":304,
       "Horsepower":150,
       "Weight_in_lbs":3433,
       "Acceleration":12,
       "Price": 400000,
       "Origin":"USA"
    },
]


function mostExpensiveCar(cars) {
    cars.sort((a,b) =>  b.Price - a.Price)
    console.log(cars[0]);
}

mostExpensiveCar(showroomOfCars);
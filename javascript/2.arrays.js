//                                  Arrays
/*
    Arrays are special variable that are used to store multiple values 
    with different data type in a single variable.
    
    Why Use Arrays?
    If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

    let car1 = "Saab";
    let car2 = "Volvo";
    let car3 = "BMW";

    You can easily store this in an Array in single variable;
    let cars = [];
*/

let cars = ["mercedes", "bmw", "ferreri", "pagani"];
console.log(cars);
console.log(cars.length); // returns length of array

// In programming every data string, array, object are 0 based indexes
//  we can access as below;
let car = cars[0] // return car from cars[0] at 0 position and store it in car variable;
console.log(car.toUpperCase()) // .toUpperCase() as we learned in 1.basics.js

// Nested arrays within an array is called Multi-dimensional arrays
let shopping = [["Pants", 5], ["Shirts", 5], ["Day", true]];
// In an array each data is called an entry to access them using indexes we use below;
let item = shopping[1][0] // first it goes 1 position which is ["Shirts", 5] then it goes to 0 position which is "Shirsts";
console.log(item);


//  Using .push() method in array to push data at end of an array
// we use cars array from above
cars.push("maserati"); // .push() takes the value "maserati" and pushes it at end of cars array.
console.log(cars);

//  Using .pop() method in array to pop off data from end of an array
let lastCar = cars.pop() // .pop() removes element/data from end of array and returns it, so we stored in carData now in cars array there is no value of "maserati";
console.log(lastCar)

//  Using .shift() method in array to pop off data from beginning of an array
let carAtFirst = cars.shift() // it removes it first element from array and returns it. In cars array there is no value of "mercedes"; 
console.log(carAtFirst);

//  Using .unshift() method in array to add data in the beginning of an array
cars.unshift("lamborghini");
console.log(cars);


// as we learn .length in 1.basics.js, we can also use it in array;
let getCarWithLength = cars[cars.length - 1]; // gives car at last index of cars array
console.log(getCarWithLength); // pegani
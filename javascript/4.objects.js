//          Objects: ({})
/*
    In JavaScript, Objects are 'key/property: value' pairs.
    Objects are used to store data in a structured way and used to define properties of an object. 
    In Object you can store all data string, numbers, boolean, arrays, functions
    using key: value pair as below

    Objects are declared with {};
    Example:
    {
        key  value
        name: "Mateen Ahmed",
        age: 19
    }
*/

let carObject = {
    name: "Audi",
    "model year": 2019,  // if key name has space we can write them as string which are as JSON
    color: "black",
    features: ["Sun roof", "360 camera"],
};
console.log(carObject);

// accessing object instead of using indexes number like array and string, in object we use '.' and name indexes;
let carName = carObject.name;
console.log(carName)

// accessing using name indexes;
let model = "model year"; // storing key/property name in variable, which I want to look for in Object
let carModel = carObject[model]; 
console.log(carModel) 

// adding property and value from outside of object;
carObject["modelName"] = "Audi A3";
console.log(carObject);


// .hasOwnProperty() method which returns true or false if property exists or not.
let checkProp = "name";
console.log(carObject.hasOwnProperty(checkProp))



// Array of Objects;
let companies = [
    {
        name: "Apple",
        founder: "Steve Jobs"
    }, 
    {
        name: "Facebook",
        founder: "Mark Zakerburg"
    }
];

for (let i=0; i < companies.length; i++) {
    console.log(companies[i]);
}
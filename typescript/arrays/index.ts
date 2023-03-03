//                      Arrays

/*
    Array are special kind of Objects where you can
    store multiple values, to avoid declaring same data
    repeatedly for same thing. Like;
    
    let car1 = "BMW";
    let car2 = "Mercedes";
    let car3 = "Ferreri";

    We can avoid this repeat of data for same car by using array.

    You assign array data inside square bracket [];

*/

// The values inside array are also called elements;
const cars: string[] = ["BMW", "Mercedez", "Ferreri", "Porche"];
console.log(cars);

/*
    To access a specific element of array we use indexes.
    Array are zero (0) based indexes as computer reads from 0-9 decimal numbers.
    
    We use array name and place index specified inside brackets cars[0];
*/
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

/*
    One thing you noticed that I have declared array variable
    with 'const' keyword not 'let', because we don't want to
    change our whole array.

    So now thing is how can we change value of array if we want.
    Yes we can do this by specifying the index and the value 
    that we want to change / manipulate.
*/

cars[0] = "Honda";
// 0 index was BMW now it changed to 'Honda'
console.log(cars);


// Defining type of Array with both number and string
let groceries: Array<string|number> = ["Apples", 12, "Mangos", 5];


// Manipulating Arrays with .push(), .pop(), .shift(), .unshift()

// .push() : pushes nth number of elemets at the end of array
groceries.push("Bananas", 6, "Eggs", 12);
console.log(groceries);

// .pop(): pop/remove off the value from end of array and returns it
let lastValue = groceries.pop();
console.log(lastValue); // 12: now array don't have value of 12;
console.log(groceries);

// .shift(): remove's the element from array at beginning and returns it;
let firstValue = groceries.shift();
console.log(firstValue);

// .unshift(): add nth number of elements at the beginning of array;
groceries.unshift("Chocolates", 12, "Chips", 3);
console.log(groceries);

// starting new line/ line break
console.log("\n");

// You can find length of array using .length property with array
console.log("Length of Groceries array:", groceries.length); // 10


/*
    As we did with indexes cars[0] to find element 
    we can also do with '.length' property to find element and nth index;

    To find last element in any array, use array name and in square brackets
    use 'nameOfArra.length - 1'  to subtract  1 from the last index to get last value

    cars[cars.length - 1];
*/
console.log(groceries[groceries.length - 1]);
// find 2nd last element using .lenght from cars and groceries;
console.log(groceries[groceries.length - 2]); // 6
console.log(cars[cars.length - 2]); // Ferreri


const users: string[] = ["Mateen Shahbaz", "Danyial Nagori", "Zia Khan"];


// .splice(): it does both removes and add element at nth place
// add element starts position at index 2 and remove 0 element and add "Muhammad Ali"
users.splice(2, 0, "Muhammad Ali");
console.log(users);

// return removed element from nth place;
let nthRemove = users.splice(1,1); // first start from 1 and second remove 1 element return
console.log(nthRemove);


// .indexOf: find the index/position of a value in array;

console.log(users.indexOf("Zia Khan"));

// .includes: return boolean true if value exists else returns false
console.log(users.includes("Zia Khan"));



// .concat: add array or items in array
console.log(users.concat("Raza"));
console.log(users.concat(["Afzal", "Rahim", "Irshad"]));



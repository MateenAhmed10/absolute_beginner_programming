//          Methods of array

// .concat()
/*
    .concat(): method concatenates (joins) the two or more arrays
            and it return the new array containing the joind array.
    .concat() does not change the original array
    */
const fruits: string[] = ["apple", "pomegranate", "mango", "banana", "peach"];
let newFruits: string[] = ["grapes", "pineapple"];
let testConcat = fruits.concat(newFruits);
console.log("\n"); // start newline
console.log(testConcat);

// .join()
/*
    .join(): method return the arrays as a string
            and it doees not change the original array.
            The default separator is comma (,).
            array.join(",")
*/
// example using fruits array
let testJoin1 = fruits.join(); // default comma (,)
let testJoin2 = fruits.join(" and ");
console.log("\n"); // start newline
console.log(testJoin1);
console.log(testJoin2);

// .slice()
/*
    .slice(): method returns the selected elements from array, as new array.
            It does not change the original array. Specify the start number/index of
            element and end number, by default start's at (0) and end's at last element.
            array.slice(start, end)
*/
let testSlice1 = fruits.slice(); // default start at 0 and end at last;
let testSlice2 = fruits.slice(1); // start from (1) index and by default end at last;
let testSlice3 = fruits.slice(3, 4); // start from (3) index and stop at index (4)
console.log("\n"); // start newline
console.log("Slice Method:", testSlice1);
console.log("Slice Method:", testSlice2);
console.log("Slice Method:", testSlice3);

// .splice()
/*
    .splice(): method adds and/or removes element from array.
            The method changes the original array;
            
            array.splice(start, numOfItemDelete, item1, ...., itemN)

            .splice specify the number/index to start from and number of items if to
            delete and items you want to add.
*/
// as splice changes the original array so make copy of original array
let copyOfFruits: string[] = [...fruits];
let testSplice1 = copyOfFruits.splice(1, 2); // start from (1) index and remove (2) item
let testSplice2 = copyOfFruits.splice(0, 0, "blueberry"); /* start from (0) index, delete (0) item and add new item "blueberry" at (0) index. */
console.log("\n"); // start newline
console.log("Splice Method 1:", testSplice1);
console.log("Splice Method 2:", testSplice2);
console.log(copyOfFruits);




export {};
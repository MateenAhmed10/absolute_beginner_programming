// Objects in typescript by defining types in object
function countries(cnt: {name: string, city: string, population: number}) {
    console.log(cnt);
};

countries({name:"Pakistan", city:"Karachi", population: 800000})


// You can define optional properties in Objects using (?)
function users(person: {firstName: string, lastName?: string}) {
    console.log(person);
};
users({firstName: "Shahbaz"});
users({firstName: "Shahbaz", lastName: "Ahmed"});


// Union Types: (union means, action of joining together)
/*
    TypeScript allows you to build new types out of existing ones
    using a variety of operators.

    The first is Union |
    You can define two to more types of single variable
    as we can use user_id it might be string "PIAIC0325" or number 9462190
*/
let user_id: number | string = "";
user_id = "PIAIC9596";
user_id = 738032;
console.log(user_id); /*    Because of union type first type of user_id is string because we assigned it string and then we assign a number so the type became number

*/


/*
    Type Aliases:
    Till now we were defining types directly in type annotation.

    But it's common to use the same type more than once and refer to it
    by a single

    A type aliases is exactly that - a name for any types
*/
// separatly defining type for id using type and name giving ID
type ID = number | string;
let customer_id: ID = "PIAIC56458";

// type defining of Object
type User = { 
    name: string,
    user_id: number,
    email?: string,
}

const person: User = {
    name: "John",
    user_id: 12053,
    email: "example@xyz.com",
}

// Inerfaces is nearly as same as Type Aliases
interface Product {
    name: string,
    quantity: number,
    price: number,
}

const glass: Product = {
    name: "RayBan",
    quantity: 20,
    price: 200,
}





export {};



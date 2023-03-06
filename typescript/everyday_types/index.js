// Objects in typescript by defining types in object
function countries(cnt) {
    console.log(cnt);
}
;
countries({ name: "Pakistan", city: "Karachi", population: 800000 });
// You can define optional properties in Objects using (?)
function users(person) {
    console.log(person);
}
;
users({ firstName: "Shahbaz" });
users({ firstName: "Shahbaz", lastName: "Ahmed" });
// Union Types: (union means, action of joining together)
/*
    TypeScript allows you to build new types out of existing ones
    using a variety of operators.

    The first is Union |
    You can define two to more types of single variable
    as we can use user_id it might be string "PIAIC0325" or number 9462190
*/
let user_id = "";
user_id = "PIAIC9596";
user_id = 738032;
console.log(user_id); /*    Because of union type first type of user_id is string because we assigned it string and then we assign a number so the type became number

*/
let customer_id = "PIAIC56458";
const person = {
    name: "John",
    user_id: 12053,
    email: "example@xyz.com",
};
export {};

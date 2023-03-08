type User = {
  firstName: string;
  lastName: string;
  roll: string;
}[];

let users: User = [
  {
    firstName: "Mateen",
    lastName: "Shahbaz",
    roll: "PIAIC03131",
  },
  {
    firstName: "Ali",
    lastName: "Ahmed",
    roll: "PIAIC03131",
  },
];

const lookup = (lookupUser: User, userToLook: string) => {
  let gotUser: Object = {};
  for (let i = 0; i < lookupUser.length; i++) {
    if (lookupUser[i].firstName.toLowerCase() === userToLook.toLowerCase()) {
      gotUser = lookupUser[i];
      break;
    } else {
      gotUser = { error: "User is not enrolled!" };
    };
  };
  return gotUser;
};
console.log(lookup(users, "Mateen"));


console.log(...users);



export {};

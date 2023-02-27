"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectCreator(name, email, isActive) {
    return [{
            name,
            email,
            isActive
        }];
}
;
const User = { name: "Mateen", email: "example@xyz.com", isActive: false };
let user = objectCreator(User.name, User.email, User.isActive);
console.log(user);

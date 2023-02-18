"use strict";
exports.__esModule = true;
function objectCreator(name, email, isActive) {
    return [{
            name: name,
            email: email,
            isActive: isActive
        }];
}
;
var User = { name: "Mateen", email: "example@xyz.com", isActive: false };
var user = objectCreator(User.name, User.email, User.isActive);
console.log(user);

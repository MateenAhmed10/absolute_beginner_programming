function addTwo(num) {
    return num + 2;
}
;
var adTwo = addTwo(5);
console.log(adTwo);
var signUp = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return [{
            name: name,
            email: email,
            isPaid: isPaid
        }];
};
var userSignUp = signUp("Mateen Shahbaz", "shahbaz@na.com");
console.log(userSignUp);

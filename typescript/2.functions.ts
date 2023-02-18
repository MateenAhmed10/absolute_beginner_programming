function addTwo(num:number): number {
    return num + 2;
};

let adTwo = addTwo(5);
console.log(adTwo)

const signUp = (name:string, email:string, isPaid:boolean = false): Array<object> => {
    return [{
        name,
        email,
        isPaid
    }]
};

let userSignUp = signUp("Mateen Shahbaz", "shahbaz@na.com");
console.log(userSignUp);
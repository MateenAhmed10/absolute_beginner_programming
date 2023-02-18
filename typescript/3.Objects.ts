function objectCreator(name: string, email: string, isActive: boolean): Array<object> {
    return [{
        name,
        email,
        isActive
    }]
};

const User = {name:"Mateen", email:"example@xyz.com", isActive:false}

let user = objectCreator(User.name, User.email, User.isActive);
console.log(user)
export {}
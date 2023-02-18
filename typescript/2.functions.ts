let d = new Date().toLocaleDateString();

function getGreets(person: string, date: string) {
    return `Hello! ${person}, I am TypeScript and today is ${date}.`;
}

let greet = getGreets("Mateen", d);
console.log(greet)
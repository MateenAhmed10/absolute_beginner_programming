let d = new Date();

function getGreets(person: string, date: Date) {
    return `Hello! ${person}, I am TypeScript and today is ${date.toLocaleDateString()}.`;
}

let greet = getGreets("Mateen", d);
console.log(greet)

function product(a: number, b: number): number {
    return a * b;
};
console.log(product(2, 2))
var d = new Date().toLocaleDateString();
function getGreets(person, date) {
    return "Hello! ".concat(person, ", I am TypeScript and today is ").concat(date, ".");
}
var greet = getGreets("Mateen", d);
console.log(greet);

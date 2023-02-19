var d = new Date();
function getGreets(person, date) {
    return "Hello! ".concat(person, ", I am TypeScript and today is ").concat(date.toLocaleDateString(), ".");
}
var greet = getGreets("Mateen", d);
console.log(greet);
var def = null;

//                      if, else, if else statments
/*
    In programming/javascript you use statements
    when you want to make some decisions
    like if users enters write password or wrong

    Syntax:

    if (condition is true) {
        run the statements;
    }

    ! if specified condition is true in () then run the code inside blocks {}
*/
let userName = "Mateen";
if (userName === "Mateen") {
    console.log(`${userName}, you are welcome in!`);
}
/*
    Now what if condition is not true than we use else
    to return something.
*/
//Check for license
let userAge = 10;
if (userAge >= 18) {
    console.log("Congrats, you are eligible for driving license.");
}
else {
    console.log("Sorry! you are not eligible for driving license.");
}
// Writing again and again if statements is bad
// passing marks
let score = 67;
if (score === 45) {
    console.log("You got C in exam");
}
if (score > 60) {
    console.log("You got B in exam");
}
/*
    Instead of writing if statement multiple times
    use else if.
*/
let percentAge = 99;
if (percentAge >= 85 && percentAge <= 100) {
    console.log("Many Congratulations, you got A+.");
}
else if (percentAge >= 75 && percentAge <= 84) {
    console.log("Congratulations, you got A.");
}
else if (percentAge >= 60 && percentAge <= 74) {
    console.log("Good, you got B");
}
else if (percentAge >= 45 && percentAge <= 59) {
    console.log("You got C");
}
else {
    console.log("Sorry! you failed the exam");
}
// Nested statements, statements inside statement
// Checking for Pakistan's ID
let country = "Pakistan";
let personAge = 18;
if (country === "Pakistan" || country === "PK") {
    // if either operand is true go inside
    if (personAge >= 18) {
        // if true go inside else run next statement
        console.log("Welcome to Nadra for your ID issue.");
    }
    else if (personAge < 18 && personAge > 14) {
        console.log("Welcome to Nadra for your Smart Card issue.");
    }
    else {
        console.log("Your are under age!");
    }
}
else {
    console.log("Sorry! you not a citizen of Pakistan");
}
export {};

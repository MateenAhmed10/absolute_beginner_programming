import promptSync from "prompt-sync";

let prompt = promptSync();


let name: string = prompt("What is your name? ");
console.log(`Hi ${name}, answer below questions`);
let score: number = 0;
console.log(`\n`)

let quest1: string = prompt("Is TypeScipt dynamic or static language? ");
const question1 = (q1: string): string => {
    let ans: string = "";
    if(quest1.toLocaleLowerCase() === "static") {
        score++;
        ans = `Great!`;
    } else {
        score;
        ans = 'Ohh! you are wrong.';
    }
    return ans;
};
console.log(question1(quest1));
console.log(score)


// Asking question two
let quest2 = prompt("Is TypeScript superset of JavaScript y/n?");
const question2 = (q2: string): string => {
    let ans: string = '';
    if(quest2.toLocaleLowerCase() === 'y') {
        score++;
        ans = `Great!`;
    } else {
        score = score;
    }

    return ans;
}
console.log(question2(quest2));
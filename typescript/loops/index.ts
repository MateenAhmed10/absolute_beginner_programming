//                  JS/TS Loops: for, while, do-while
/*
    Loops are simple you use loops when you want 
    to run the code nth times.
*/


// for loop
/*
    for(initialization, condition, statement) {
        code
    }
*/
let ascend: number[] = [];
// start i from 1 until its equal to 10;
for(let i=1; i <= 10; i++) {
    ascend.push(i);

}
console.log("Ascending .push:",ascend);

let descend: number[] = [];
for(let i=1; i <= 10; i++) {
    descend.unshift(i);
}
console.log("Descending .unshift:",descend);



// while loop
/*
    while run's a code until condition
    is true;
*/
let x = 0;
while (x <= 10) { // run x until it's equal to 9
    console.log(x);
    x++;
}

// do while loop:
/*
    do-while loop: 'do' a specific task while condition is true. 
*/
let y = 0;
let expDoWhile: number[] = [];
do {
    expDoWhile.push(y);
    y++;
} while(y <= 10);
console.log(expDoWhile);
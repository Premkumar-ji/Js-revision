let prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
let n = Number(num);

// Added \n at the end to move to the next line
process.stdout.write(num + "\n"); 

// BRUTE FORCE APROACH

// for(let i = 0; i < n; i++){
//     for(let j = 0; j <= i; j++){
        
//         if(i==n-1){
//             process.stdout.write("* ");

//         }
//         else if(j>=1&&j<i){
//             process.stdout.write("^ ");
//         }
//         else
//             process.stdout.write("* ");
//         }
//     process.stdout.write(" \n");
// }

// OPTIMIZED

for (let i = 0; i < n; i++) {
    if (i === 0) {
        // First row: just a single star
        process.stdout.write("* \n");
    } else if (i === n - 1) {
        // Last row: a full row of stars
        process.stdout.write("* ".repeat(n) + "\n");
    } else {
        // Middle rows: starts with *, repeats ^ in the middle, ends with *
        process.stdout.write("* " + "^ ".repeat(i - 1) + "* \n");
    }
}
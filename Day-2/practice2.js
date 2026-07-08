let prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");
let n = Number(num);  

// for (let index = n; index >0; index--) {

//     process.stdout.write("* ".repeat(index) + "\n");

// }

// for (let index = 1; index <= n; index++) {

//     process.stdout.write("_ ".repeat(n - index ) +"* ".repeat(index) + "\n");

// }
process.stdout.write("\n");

for (let index = 1; index <= n; index++) {
  process.stdout.write(
    " ".repeat(n - index) + "* ".repeat(index) + "\n" + "\n",
  );
}

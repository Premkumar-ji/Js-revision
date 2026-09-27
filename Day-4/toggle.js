let word = prompt("Enter the number : ");
let toggle = "";
for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i);
  if (index >= 65 && index <= 90) {
    toggle = toggle + String.fromCharCode(index + 32);
  }
  if (index >= 97 && index <= 122) {
    toggle = toggle + String.fromCharCode(index - 32);
  }
}
console.log(word);

console.log(toggle);

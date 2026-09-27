// let s1 = "prem";
// let s2 = " modi";
// let rev = "";
// let bio = "       i am the best software developer   .";
// console.log(s1.concat(s2));
// console.log(bio.indexOf("b"));
// console.log(bio.trim(" ").replace("software", "web"));
// console.log(bio.trim(" "));
// for (let index = s2.length - 1; index >= 0; index--) {
//   rev += s2[index];
// }
// console.log(rev);
// //! rev = idom

// let reversed = true;
// for (let i = 0, j = rev.length - 1; i <= s2.length - 1, j >= 0; i++, j--) {
//   if (s2.charAt(i) !== rev.charAt(j)) {
//     reversed = false;
//   }
// }
// console.log(reversed);   


let random = "aabcsshsb";
let arr = [];


for(let i  =0;i<random.length;i++){

  let ascci =   random.charCodeAt(i);
  let index = ascci - 97;
  console.log(index);
  
  if (arr[index]=== undefined){
    arr[index]=1;
  }
  else{
    arr[index]+=1;
  }
};

console.log(arr);




// function price(){
//     let items = [100,200,300,400,500];
//      calculate_Offer(items);
// };
// function calculate_Offer(items){

//     for(let val of items){
//         let offerprice = val-(val*20)/100;
//         console.log(`Original price was ${val} and the offer price = ${offerprice}`);
//     }
// }
// price();

// let fruits = ["apple", "mango", "banana", "orange", "grapes", "pineapple"];
// fruits.push("papaya","watermelon");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// let item = [100, 200, 300, 4000, 500, 600, 700, 800, 900, 1000];
// console.log(item);
// item.shift();
// console.log(typeof (fruits))

// console.log(typeof (item[1]))

// console.log(typeof (fruits[1]))

// console.log(item.slice(2,4))
// console.log(item.splice(2,1,101,12))
// console.log(item);

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies.shift());
// console.log(companies);
// console.log(companies.splice(1,1,"Ola"));
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// function countVowels(s) {
//     let strings = s;
//     let count = 0;
//     let arr = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < strings.length; i++) {
//         for (let index = 0; index < arr.length; index++) {
//             if (strings[i] === arr[index]) {
//                 console.log(`${strings[i]}`)
//                 count += 1;
//             }


//         }
//     }
//     console.log(count);
// }
// countVowels("prem;feoi");

// const countV = (s)=>{
//     let strings = s;
//     let count = 0;
//     let arr = [ "a" , "e", "i", "o", "u"];
//     for (let i = 0; i < strings.length; i++) {
//         for (let index = 0; index < arr.length; index++) {
//             if (strings[i] === arr[index]) {
//                 console.log(`${strings[i]}`)
//                 count += 1;
//             }


//         }
//     }
//     return count;
// }
// let totalVowel = countV("totol vowel = hello prem bhai")
// console.log("total vowel = " , totalVowel)

// function countvowels(str) {
//     let count = 0;
//     for (let st of str) {
//         if (st == "a" || st == "e" || st == "i" || st == "o" || st == "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countvowels("prem bhai"))


// let nums = [1,5,9,3,7,2,8,4,6];
// let sq = (num , idx)=>{
//     console.log(num*num,id )

// }

// nums.forEach(sq);

let functionName = prompt("enter the function you want to run");
switch (functionName) {
    case "vote":
        let age = Number(prompt("enter your age"));
        let checkpoint = prompt("Do you have election card of India?");
        if (age < 18 || age > 110 || isNaN(age)) {
            alert("this age is not allowed to vote")
        }
        else if (checkpoint != "yes") {
            alert("Since you are not a citizen of India,you are not allowed to vote");
        }
        else {
            alert("you are allowed to vote");
        }

        break;
    case "bijlibill":
        let subdivisionprices = 0;
        let MeterUnit = Number(prompt("enter your total units of electiric board"));
        if (isNaN(MeterUnit)) {
            alert("enter the unit which is displayed on the electricity board ")
        }
        if (MeterUnit > 400) {
            subdivisionprices += (MeterUnit - 400) * 6;
            MeterUnit = 400;
        };
        if (MeterUnit > 200) {
            subdivisionprices += (MeterUnit - 200) * 4;
            MeterUnit = 200;
        }
        if (MeterUnit > 100) {
            subdivisionprices += (MeterUnit - 100) * 3;
            MeterUnit = 100;
        }
        if (MeterUnit > 0) {
            subdivisionprices += MeterUnit * 2.5
        }

        alert(`your total cost of electicity bill is : $ ${subdivisionprices}`)
        break;

    default:
        alert("Your input is wrong");
};
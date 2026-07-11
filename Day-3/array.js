//? arranging all zeros to left
// let arr = [ 1,1,0,1,0,1,0];
// let j = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]==0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
// }
// console.log(arr);

//? Reverse array by k index

// function Reverse1(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = 3;
// Reverse1(ar, 0, k-1);
// Reverse1(ar, k, ar.length-1);
// Reverse1(ar, 0, ar.length-1);
// console.log(ar);

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

let nums = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8];


var removeDuplicates = function (nums) {
    
 let i = 0 , j=1;
while(i<nums.length){
    if(nums[i]!==nums[j]){
        j++;
        i++
        continue;
    }
    if(nums[i]===nums[j]){
        while(j<nums.length){
            if(nums[i]===nums[j]){
                j++;
                continue;
            }
            else if(nums[j]>nums[i]){
                nums[i+1]=nums[j];
                i++;
                j=i+1;
                continue;
            }
            
        }

    }
}
    return nums;
}

console.log("the new array = " + removeDuplicates(nums));
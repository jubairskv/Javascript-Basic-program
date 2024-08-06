//Find largest number in an array:
// let arr = [2, 5, 8, 3, 4, 5, 1];
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   //TimeComplexity = o(n)
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
//   //return largest
// }
// console.log(largest);

//find smallest number in an array:
// let arr1 = [2, 5, 8, 3, 4, 5, 1];
// let smallest = arr[0];
// for (let i = 0; i < arr1.length; i++) {
//   //TimeComplexity = o(n)
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
//   //return smallest
// }
// console.log(smallest);

//find second largest number in an array:
// let arr=[1,1,1,1,4,5,6,7,7,7,7,8,8,8,9]
// let largest = arr[0];
// let secondLargest = -infinity;
// for (let i = 0; i < arr.length; i++) {               //Time Complexity : o(n)
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] < largest && arr[i] > secondLargest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest);

//find second smalltest element in array:
// let arr = [1, 2, 3, 4, 5, 5.6, 7, 7, 7, 8, 9];
// let smallest = arr[0];
// let secondSmallest = Infinity;
// for (let i = 0; i < arr.length; i++) {                      //Time Complexity : o(n)
//   if (arr[i] < smallest) {
//     secondSmallest = smallest;
//     smallest = arr[i];
//   } else if (arr[i] > secondSmallest && arr[i] < smallest) {
//     secondSmallest = arr[i];
//   }
// }
// console.log(secondSmallest, smallest);

//Find third largest element in an array:
// let arr = [5,2,2];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;
// for (let i = 0; i <  arr.length; i++) {
//   if (arr[i] > largest) {
//     thirdLargest=secondLargest
//     secondLargest=largest
//     largest= arr[i]
//   }else if(arr[i] < largest && arr[i] > secondLargest){
//     thirdLargest= secondLargest
//     secondLargest = arr[i]
//   }else if (arr[i] < secondLargest && arr[i] > thirdLargest && arr[i] !== secondLargest ){
//     thirdLargest = arr[i]
//   }
// }
// console.log(thirdLargest === -Infinity ? largest : thirdLargest)


//Check if array is sorted or not:
// let arr = [1, 2, 3, 4, 3, 5, 6, 7];
// for (let i = 1; i < arr.length; i++) {                         //! if any error check take u forward channel in yt
//   if (arr[i] >= arr[i - 1]) {                     //tc-O(n)  => sc-O(1)
//   } else {
//     console.log("false");
//   }
// }

//remove duplicate from an array:
// function removeDuplicate(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     console.log(arr[j]);
//     if (arr[j] !== arr[i]) {
//       // a[i] =[1,1,2,2,2,3,3]     a[j]=[1,2,2,2,3,3]
//       arr[i + 1] = arr[j];
//       i++;
//     }
//   }

//   return i + 1;
// }
// let arr = [1, 1, 2, 2, 2, 3, 3];
// let k = removeDuplicate(arr);
// for (let i = 0; i < k; i++) {
//   console.log(arr[i]);
// }

//find missing number in an array:

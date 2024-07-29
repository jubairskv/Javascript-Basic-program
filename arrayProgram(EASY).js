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
//   } else if (arr[i] > largest && arr[i] < secondLargest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest);

// find second smalltest element in array:
// let arr = [1, 2, 3, 4, 5, 5.6, 7, 7, 7, 8, 9];
// let smallest = arr[0];
// let secondSmallest = Infinity;
// for (let i = 0; i < arr.length; i++) {                      //Time Complexity : o(n)
//   if (arr[i] < smallest) {
//     secondSmallest = smallest;
//     smallest = arr[i];
//   } else if (arr[i] < secondSmallest && arr[i] > smallest) {
//     secondSmallest = arr[i];
//   }
// }
// console.log(secondSmallest, smallest);

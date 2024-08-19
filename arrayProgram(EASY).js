// //Find largest number in an array:
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

// //find smallest number in an array:
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

// //find second largest number in an array:
// let arr = [1, 1, 1, 1, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 9];
// let largest = arr[0];
// let secondLargest = -infinity;
// for (let i = 0; i < arr.length; i++) {
//   //Time Complexity : o(n)
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] < largest && arr[i] > secondLargest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest);

// //find second smalltest element in array:
// let arr = [1, 2, 3, 4, 5, 5.6, 7, 7, 7, 8, 9];
// let smallest = arr[0];
// let secondSmallest = Infinity;
// for (let i = 0; i < arr.length; i++) {
//   //Time Complexity : o(n)
//   if (arr[i] < smallest) {
//     secondSmallest = smallest;
//     smallest = arr[i];
//   } else if (arr[i] > secondSmallest && arr[i] < smallest) {
//     secondSmallest = arr[i];
//   }
// }
// console.log(secondSmallest, smallest);

// //Find third largest element in an array:
// let arr = [5, 2, 2];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     thirdLargest = secondLargest;
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] < largest && arr[i] > secondLargest) {
//     thirdLargest = secondLargest;
//     secondLargest = arr[i];
//   } else if (
//     arr[i] < secondLargest &&
//     arr[i] > thirdLargest &&
//     arr[i] !== secondLargest
//   ) {
//     thirdLargest = arr[i];
//   }
// }
// console.log(thirdLargest === -Infinity ? largest : thirdLargest);

// //Check if array is sorted or not:
// let arr = [1, 2, 3, 4, 3, 5, 6, 7];
// for (let i = 1; i < arr.length; i++) {
//   //! if any error check take u forward channel in yt
//   if (arr[i] >= arr[i - 1]) {
//     //tc-O(n)  => sc-O(1)
//   } else {
//     console.log("false");
//   }
// }

// //remove duplicate from an array:
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

//find missing and repeating number in an array:  [brutu force approach]
// function findMissingandrepesting(arr) {
//   let repeating = -1;
//   let missing = -1;
//   for (let i = 1; i <= arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       repeating = i;
//     } else if (count === 0) {
//       missing = i;
//     }
//     if (repeating != -1 && missing != -1) {
//       break;
//     }
//   }
//   return [repeating, missing];
// }
// arr = [1, 2, 4, 5, 6, 6, 6, 7, 7];
// const ans = findMissingandrepesting(arr);
// console.log(ans[0], ans[1]);



// function findMissingRepeatingNumbers(a) {
//   const n = a.length; // size of the array

//   // Find Sn and S2n:
//   const SN = (n * (n + 1)) / 2;
//   const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

//   // Calculate S and S2:
//   let S = 0, S2 = 0;
//   for (let i = 0; i < n; i++) {
//       S += a[i];
//       S2 += a[i] * a[i];
//   }

//   //S-Sn = X-Y:
//   const val1 = S - SN;

//   // S2-S2n = X^2-Y^2:
//   let val2 = S2 - S2N;

//   //Find X+Y = (X^2-Y^2)/(X-Y):
//   val2 = val2 / val1;

//   //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
//   // Here, X-Y = val1 and X+Y = val2:
//   const x = (val1 + val2) / 2;
//   const y = x - val1;

//   return [x, y];
// }

// const a = [3, 1, 2, 5, 4, 6, 7, 5];
// const ans = findMissingRepeatingNumbers(a);
// console.log(`The repeating and missing numbers are: [${ans[0]}, ${ans[1]}]`);



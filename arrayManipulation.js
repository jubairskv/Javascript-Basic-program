//add a number in array:
// let arr=[1,2,3,4,];              //! dont hardcode the code directly dynamically pass the data like line number: 4
// let newElement = 5;             //          arr[4] = 5
// arr[arr.length] = newElement   //   arr[arr.length] = newElement
// console.log(arr)

//add a newnumber in begining:
// let arr = [1, 2, 3, 4]; //[0,1,2,3]
// let newElement = 0;
// for (let i = arr.length; i > 0; i--) {
//   console.log("before:", arr[i]);
//   arr[i] = arr[i - 1];                 //arr[4] = arr[4-1]   //arr[4] =arr[3]  //array number
//   console.log("after:", arr[i]);
// }
// arr[0] = newElement;
// console.log(arr);

//remove a number from end:
// let arr = [1, 2, 3];
// let newArr = [];
//console.log(newArr)
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log("Before:", arr[i]);
//   newArr[i] = arr[i];
//   console.log("After:", arr[i]);
// }
// arr = newArr;
// console.log(arr)

//removing a number from beginning:
// let arr=[1,2,3];
// let newArr = [];
// for (let i=1;i<arr.length;i++){
//     console.log(arr[i])
//     newArr[i-1] =  arr[i]
// }
// arr = newArr
// console.log(newArr)

//modifying the element:
// let arr=[1,2,3,4,5]
// arr[2]=10
// console.log(arr)

//iterating over an array:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let x of arr) {
//   console.log("for of loop:", x);
// }

// let arr1=[1,2,3,4,5,6,7,8,9]
// for (let i = 0; i <arr1.length; i++) {
//   console.log("normal for loop", arr1[i]);
// }

//Adding an Element in the Middle of an Array In-Place
// let arr = [1, 2, 3, 4, 5];
// let newElement = 99;
// let index = 2; // Position to insert newElement

// // Ensure the index is within bounds
// if (index >= 0 && index <= arr.length) {
//   // Shift elements to the right
//   for (let i = arr.length; i > index; i--) {
//     //console.log(arr[i])
//     console.log(i)
//     arr[i] = arr[i - 1];
//   }

//   // Insert the new element
//   arr[index] = newElement;
// }

// console.log(arr); // Output: [1, 2, 99, 3, 4, 5]

//Adding Multiple Elements in the Middle of an Array:

// let arr = [1, 2, 3, 4, 5]; //        [1,2,99,100,101,3,4,5]
// let newElements = [99, 100, 101];
// let index = 2; // Position to insert newElements

// // Ensure the index is within bounds
// if (index >= 0 && index <= arr.length) {
//   // Shift elements to the right
//   for (let i = arr.length - 1; i >= index; i--) {
//     //console.log(i)
//     arr[i + newElements.length] = arr[i];
//     // console.log(arr[i + newElements.length])
//     //arr[5+3] = arr[5]
//   }
//   // console.log(arr)

//   // Insert the new elements
//   for (let i = 0; i < newElements.length; i++) {
//     arr[index + i] = newElements[i];
//   }
// }

//console.log(arr); // Output: [1, 2, 99, 100, 101, 3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let newElement = [99, 100, 101];
let index = 2;

if (index >= 0 && index <= arr.length) {
  for (let i = arr.length - 1; i >= index; i--) {
    console.log(i);
    arr[i + newElement.length] = arr[i];
  }
  for (let i = 0; i <= index; i++) {
    arr[index + i] = newElement[i];
  }
}
console.log(arr);

//add a number in array:
// let arr=[1,2,3,4,];              //! dont hardcode the code directly dynamically pass the data like line number: 4
// let newElement = 5;             //          arr[4] = 5
// arr[arr.length] = newElement   //   arr[arr.length] = newElement
// console.log(arr)

//add a newnumber in begining:
let arr = [1, 2, 3, 4]; //[0,1,2,3]
let newElement = 0;
for (let i = arr.length; i > 0; i--) {
  console.log("before:", arr[i]);
  arr[i] = arr[i - 1];                 //arr[4] = arr[4-1]   //arr[4] =arr[3]  //array number
  console.log("after:", arr[i]);
}
arr[0] = newElement;
console.log(arr);


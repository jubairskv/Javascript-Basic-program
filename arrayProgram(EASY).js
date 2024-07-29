//Find largest number in an array:
let arr = [2, 5, 8, 3, 4, 5, 1];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {        //TimeComplexity = o(n)
  if (arr[i] > largest) {
    largest = arr[i];
  }
  //return largest
}
console.log(largest);

//find smallest number in an array:
let arr1 = [2, 5, 8, 3, 4, 5, 1];
let smallest = arr[0];
for (let i = 0; i < arr1.length; i++) {      //TimeComplexity = o(n)
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
  //return smallest
}
console.log(smallest);

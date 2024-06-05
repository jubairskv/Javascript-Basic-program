//Reverse an array
let arr =[1,2,3,4,5,6]
let rev=arr.reverse()
console.log(rev)

//reverse the string
let str="jubair"
let revr=str.split("").reverse().join("")
console.log(revr)


//sort the array
let srt =[1,2,7,8,9,3,5,4]
let sort=srt.sort()
console.log(sort)

//sort an astring in alphabet order:
let string="jubair"
let arrs=string.split('')
console.log(arrs.sort().join(''))

//reverse the array using loop:

function reverseArray(arr){
   const  array=[]
    for(let i=arr.length-1;i>=0;i--){
        array.push(arr[i])
    }
    return array     
}

let originalArry=[1,2,3,4,5]
console.log(reverseArray(originalArry))


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

//count a word in the string
let data="hi this jubair junior frontend developer"
let sp =data.split(" ")
console.log(sp.length)

//capitilise the 1st letter
let lett ="i am frontend developer"
let ans =lett.split(' ')
ans[0]="I"
console.log(ans.join(" "))


//capitalize the each word 1st letter ass capital
let strs ="i am frontend developer"

function cap(word){
    return word.charAt(0).toUpperCase()+word.slice(1)
}
let spl =strs.split(" ")
let ma =spl.map(cap)
let jo =ma.join(" ")
console.log(jo)


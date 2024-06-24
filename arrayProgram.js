// //Reverse an array
// let arr =[1,2,3,4,5,6]
// let rev=arr.reverse()
// console.log(rev)


// //in function reverse string:
// function reverseString(){
//     s.reverse();
//     return s;
// }
// let s =["h","e","l","l","o"]
// console.log(reverseString(s))

// //reverse the string
// let str="jubair"
// let revr=str.split("").reverse().join("")
// console.log(revr)


// //sort the array
// let srt =[1,2,7,8,9,3,5,4]
// let sort=srt.sort()
// console.log(sort)

// //sort an astring in alphabet order:
// let string="jubair"
// let arrs=string.split('')
// console.log(arrs.sort().join(''))

// //reverse the array using loop:

// function reverseArray(arr){
//    const  array=[]
//     for(let i=arr.length-1;i>=0;i--){
//         array.push(arr[i])
//     }
//     return array     
// }
// let originalArry=[1,2,3,4,5]
// console.log(reverseArray(originalArry))

// //count a word in the string
// let data="hi this jubair junior frontend developer"
// let sp =data.split(" ")
// console.log(sp.length)

// //capitilise the 1st letter
// let lett ="i am frontend developer"
// let ans =lett.split(' ')
// ans[0]="I"
// console.log(ans.join(" "))


// //capitalize the each word 1st letter ass capital
// let strs ="i am frontend developer"

// function cap(word){
//     return word.charAt(0).toUpperCase()+word.slice(1)
// }
// let spl =strs.split(" ")
// let ma =spl.map(cap)
// let jo =ma.join(" ")
// console.log(jo)


// //swap two number without using third variable:
// let a=12;
// let b=13;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)

// //swap tow numver with third variable:
// let a1=1;
// let b1=2
// let temp=a1;a1=b1;b1=temp
// console.log(a1)
// console.log(b1)


// let a=[1,2,3,4,5,6]
// for(let i=0;i<a.length;i++){
//     console.log(i)
// }
// for(let j=6;j>1;j--){
//     console.log(j)
// }


// function Dup(nums){
//     let j=0;
//     for(let i=1;i=nums.length;i++){
//         if(nums[i]!==nums[j]){
//             nums[j++]=nums[i]
//         }
//     }
//     return j++
// }
// let nums=[0,1,2,3,4,4,5,5,5]
// console.log(Dup(nums))


//pattern program
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("* ")
//   }
//   console.log()
// }


// for (let i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(j.toString())
//   }
//   console.log()
// }


// for (let i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(i.toString())
//   }
//   console.log()
// }

// function pattern(n) {
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < n - i + 1; j++) {
//       process.stdout.write("*")
//     }
//     console.log()
//   }
// }
// pattern(6)

// function pattern2() {
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < n - i + 1; j++) {
//       process.stdout.write(j.toString())
//     }
//     console.log()
//   }
// }
// pattern2(6)



// function patern3(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       process.stdout.write(" ")
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//       process.stdout.write("*")
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       process.stdout.write(" ")
//     }
//     console.log()
//   }
// }

// patern3(6)


// function pattern4(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       process.stdout.write(" ")
//     }
//     for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
//       process.stdout.write("*")
//     }
//     for (let j = 0; j < i; j++) {
//       process.stdout.write(" ")
//     }
//     console.log()
//   }
// }
// pattern4(6)


// function pattern5(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       process.stdout.write(" ")
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//       process.stdout.write("*")
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       process.stdout.write(" ")
//     }
//     console.log()
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       process.stdout.write(" ")
//     }
//     for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
//       process.stdout.write("*")
//     }
//     for (let j = 0; j < i; j++) {
//       process.stdout.write(" ")
//     }
//     console.log()
//   }
// }
// pattern5(6)

// function pattern7(n) {
//   for (let i = 1; i <=2 * n + 1; i++) {
//     let stars = i;
//     if (i > n) stars = 2 * n - i;
//     for(let j = 1 ;j<=stars;j++){
//       process.stdout.write("*")
//     }
//     console.log()
//   }
// }
// pattern7(6)


// function pattern8(n){
//   let start =1;
//   for(let i=0;i<n;i++){
//     if(i%2==0) start =1;
//     else start =0
//     for(let j=0;j<=i;j++){
//       process.stdout.write(start)
//       start=1-start
//     }
//     console.log()
//   }
// }
// pattern8(6)


// function pattern9(n){
//   let space =2*(n-1);
//   for(let i=0;i<=n;i++){
//     for(let j=0;j<=i;j++){
//       process.stdout.write(j.toString())
//     }
//     for(let j=1;j<=space;j++){
//       process.stdout.write(" ")
//     }
//     for(let j=i;j>=1;j--){
//       process.stdout.write(j.toString())
//     }
//     console.log()
//     space-=2
//   }
// }
// pattern9(6)

// function pattern10(n){
//   let num =1
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       process.stdout.write(num.toString()+ " ")
//       num=num+1
//     }
//     console.log()
//   }
  
// }
// pattern10(5)


// function pattern12(n){
//   for(let i =0;i<n;i++){
//     let alpha=""
//     for(let j =0;j<=(n-i-1);j++){
//       alpha+=String.fromCharCode(65+j)+" "
//     }
//     console.log(alpha)
//   }
// }
// pattern12(5)

function pattern13(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <=n-i-1 ; j++) {
      row += String.fromCharCode(65+j)+" "
    }
    console.log(row);
  }
}

pattern13(6);


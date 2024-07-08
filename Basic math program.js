//Count DIgit -burte force Apporch
function countDigit(n){
    let count=0
    while(n>0){
       // lastDigit=n%10;
        n=Math.floor(n/10)
        count=count+1                   //Time complexity-0(log10(n))
       
    }
    return count
}
let ans = countDigit(1562212)
console.log(ans)


//CountDigit optimal approch
function Count(n){
    return log=Math.floor(Math.log10(n)+1);       
}
let ans1=Count(1234567)
console.log(ans1)


//Reverse a number:
function Reverse(n){
    ReverseNumber=0
    while(n>0){
        lastDigit=n%10
        ReverseNumber=(ReverseNumber*10)+lastDigit
        n=Math.floor(n/10)
       
    }
    console.log(ReverseNumber)        //return reversNumber
}
Reverse(122897)




//Check palindrom:
function Reverse(n){
   let ReverseNumber=0
let  dup=n;
    while(n>0){
        lastDigit=n%10
        ReverseNumber=(ReverseNumber*10)+lastDigit
        n=Math.floor(n/10)
       
    }
    if(dup===ReverseNumber){
       return true
    }else{
       return false
    }              // console.log(ReverseNumber)        //return reversNumber
}
console.log(Reverse(121))





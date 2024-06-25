//Count DIgit -burute force Apporch
function countDigit(n){
    let count=0
    while(n>0){
        lastDigit=n%10;
        count=count+1
        n=Math.floor(n/10)
    }
    return count
}
let ans = countDigit(156)
console.log(ans)
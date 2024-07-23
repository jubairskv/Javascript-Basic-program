//Count DIgit -burte force Apporch
function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let ans = countDigit(43567);
console.log(ans);

//CountDigit optimal approch
function Count(n) {
  return (log = Math.floor(Math.log10(n) + 1));
}
let ans1 = Count(1234567);
console.log(ans1);

//Reverse a number:
function Reverse(n) {
  let ReverseNumber = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    ReverseNumber = ReverseNumber * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(ReverseNumber); //return reversNumber
}
Reverse(122897);

//Check palindrom:
function checkPalindrom(n) {
  let reverseNum = 0;
  let dup = n;
  while (n > 0) {
    let lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (dup === reverseNum) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrom(121));

//Amstrong Number:
function amstrong(n) {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + (lastDigit ** 3);
    n = Math.floor(n / 10);
  }
  if (dup === sum) {
    return "amstrong number";
  } else {
    return "not amstrong number";
  }
}
console.log(amstrong(371))

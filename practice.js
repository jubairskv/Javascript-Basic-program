// function oddorEven(n) {
//   if (n % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(oddorEven(2));

// function lastDigit(n) {
//   return n % 10;
// }
// console.log(lastDigit(123));

// function CountDigit(n) {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }
// console.log(CountDigit(78786));

// function revD(x) {
//   let rev = 0;
//   let isNegative = x < 0;
//   x = Math.abs(x);

//   while (x > 0) {
//     lastDigit = x % 10;
//     rev = rev * 10 + lastDigit;
//     x = Math.floor(x / 10);
//   }
//   if (isNegative) {
//     rev = -rev;
//   }
//   return rev;
// }
// console.log(revD(-12345));

// function checkPalindrom(n) {
//   let rev = 0;
//   let dup = n;
//   while (n > 0) {
//     lastDigit = n % 10;
//     rev = rev * 10 + lastDigit;
//     n = Math.floor(n / 10);
//   }
//   return rev === dup ? "Palindrom" : "not";
// }
// console.log(checkPalindrom(131));

// function amstrong(n) {
//   let sum = 0;
//   let dup = n;
//   while (n > 0) {
//     lastDigit = n % 10;
//     sum = sum + lastDigit ** 3;
//     n = Math.floor(n / 10);
//   }
//   return sum === dup ? "amstrong" : "not";
// }
// console.log(amstrong(0));

// function allDiv(n) {
//   let arr = [];
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//       if (n / i != i) {
//         arr.push(n / i);
//       }
//     }
//   }
//   return arr.sort((a, b) => a - b);
// }
// console.log(allDiv(6).join(" "));

// function isprime(n) {
//   let count = 0;
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2 ? "prime" : "not";
// }
// console.log(isprime(9));

// function per(n) {
//   let sum = 0;
//   let dup = n;
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       sum = sum + i;
//       if (n / i != n) {
//         sum = sum + n / i;
//       }
//     }
//   }
//   return sum === dup ? "perfect" : "not";
// }
// console.log(per(4));

// //oddor evn:
// function OddorEven(n) {
//   if (n % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(OddorEven(2));

// //find lastDigit:
// function lastDigit(n) {
//   return n % 10;
// }
// console.log(lastDigit(12234));

// //CountDigit:
// function countDigit(n) {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }
// console.log(countDigit(12345));

// //reverse number:
// function revNum(n) {
//   let rev = 0;
//   while (n > 0) {
//     lastDigit = n % 10;
//     n = Math.floor(n / 10);
//     rev = rev * 10 + lastDigit;
//   }
//   return rev;
// }
// console.log(revNum(45678));

// //check palindrom:
// function checkPalindrom(n) {
//   let revNum = 0;
//   let dup = n;
//   while (n > 0) {
//     lastDigit = n % 10;
//     n = Math.floor(n / 10);
//     revNum = revNum * 10 + lastDigit;
//   }
//   if (revNum === dup) {
//     return "pal";
//   } else {
//     return "not";
//   }
// }
// console.log(checkPalindrom(121));

// //amstrong number:
// function amstrong(n) {
//   let sum = 0;
//   let dup = n;
//   while (n > 0) {
//     lastDigit = n % 10;
//     n = Math.floor(n / 10);
//     sum = sum + lastDigit ** 3;
//   }
//   if (sum === dup) {
//     return "amstrong";
//   } else {
//     return "not";
//   }
// }
// console.log(amstrong(153));

// //print all Divisore:
// function AllDivisors(n) {
//   let array = [];
//   for (let i = 0; i * i <= n; i++) {
//     if (n % i === 0) {
//       array.push(i);
//       if (n / i !== i) {
//         array.push(n / i);
//       }
//     }
//   }
//   return array.sort((a, b) => a - b);
// }
// console.log(AllDivisors(6));

// //check prime or not:
// function PrimeorNot(n) {
//   let count = 0;
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i !== i) {
//         count++;
//       }
//     }
//   }
//   return count === 2 ? "prime" : "not";
// }
// console.log(PrimeorNot(2));

// //perfect square:
// function perfectSquare(n) {
//   let sum = 0;
//   let dup = n;
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       sum += i;
//       if (n / i !== i) {
//         sum += i;
//       }
//     }
//   }
//   return sum === dup ? "perfect square" : "Not";
// }
// console.log(perfectSquare(6));

//odd or even:
function OddorEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(OddorEven(3));

//LastDigit

function lastDigit(n) {
  return n % 10;
}
console.log(lastDigit(123));

//count Digit:
function CountDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(CountDigit(123456));

//Reverse Number:
function reverseNumber(n) {
  let revN = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    revN = revN * 10 + lastDigit;
  }
  return revN;
}
console.log(reverseNumber(1234));

//amstrong number:
function Amstrong(n) {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    sum = sum + lastDigit ** 3;
  }
  return dup === sum ? "Amstrong" : "Not";
}
console.log(Amstrong(153));

//allDivisore:
function allDivisor(n) {
  let array = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
      if (n / i != i) array.push(n / i);
    }
  }
  return array.sort((a, b) => a - b);
}
console.log(allDivisor(36).join(" "));

function isPrime(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  return count === 2 ? "prime" : "not";
}
console.log(isPrime(2));

function perfectNumber(n) {
  let sum = 0;
  let dup = n;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i != i) {
        sum += n / i;
      }
    }
  }
  return sum === dup ? "perfect" : "not";
}
console.log(isPrime(9));

function squareRoot(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if(val<=n){
      low = mid+1
    }else{
      high=mid-1
    }
  }
  return high
}
console.log(squareRoot(12))
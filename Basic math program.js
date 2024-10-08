//Find Odd or Even number :
function oddorEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddorEven(11));

//find last digit in numbre:
function lastDigit(n) {
  return n % 10;
}
console.log(lastDigit(123456));

//Count Digit -burte force Apporch:
function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // n/10=43567/10  = math.floor(4356.7) =4356
    count++; //count=count+1    0+1 =1
  }
  return count;
}
let ans = countDigit(43567);
console.log(ans);
//CountDigit optimal approach:
function Count(n) {
  return (log = Math.floor(Math.log10(n) + 1));
}
let ans1 = Count(1234567);
console.log(ans1);
//Reverse a number:
var reverse = function (x) {
  let revN = 0;
  let isNegative = x < 0;
  x = Math.abs(x); // Work with the absolute value of x

  while (x > 0) {
    let lastDigit = x % 10;
    revN = revN * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    revN = -revN; // Restore the negative sign if needed
  }

  return revN;
};
console.log(reverse(1534236469)); // Output: -32
//Reverse a number only positive value:
function rev(n) {
  let revN = 0;
  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    revN = revN * 10 + lastDigit;
  }
  return revN;
}
console.log(rev(123456));
//Reverse a number for 64Bit Digits and -value also:
var reverse = function (x) {
  let revN = BigInt(0);
  let isNegative = x < 0;
  x = BigInt(Math.abs(x)); // Work with the absolute value of x

  while (x > BigInt(0)) {
    let lastDigit = x % BigInt(10);
    revN = revN * BigInt(10) + lastDigit;
    x = x / BigInt(10);
  }

  if (isNegative) {
    revN = -revN; // Restore the negative sign if needed
  }
  const MIN_INT = -(2 ** 31);
  const MAX_INT = 2 ** 31 - 1;

  if (revN < BigInt(MIN_INT) || revN > BigInt(MAX_INT)) {
    return 0; // Return 0 for overflow/underflow
  }

  return revN;
};
console.log(reverse(1534236469));
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

//Amstrong Number:  3 153, 370, 371, 407
function amstrong(n) {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + lastDigit ** 3;
    n = Math.floor(n / 10);
  }
  if (dup === sum) {
    return "amstrong number";
  } else {
    return "not amstrong number";
  }
}
console.log(amstrong(371));

//print all divisors optimal approach:
function allDivisores(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log("Divisores:", i);
    }
  }
}
allDivisores(36);

//method 2:
function div(n) {
  let array = [];
  //6*6 =36
  //7*7 <= 36 false
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
      if (n / i != i) {
        array.push(n / i);
      }
    }
  }
  return array.sort((a, b) => a - b);
}
console.log(div(36).join(" "));
//check prime or not: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
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
  if (count === 2) {
    return "Prime number";
  } else {
    return "not prime";
  }
}
console.log(isPrime(11));

//perfect number : 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900 and 961.
function perfectNum(n) {
  //1*1=1  2*2=4 3*3=9 4*4=16 -perfect square number
  let sum = 0;
  let dup = n;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i != n) {
        //need to check n not i if u go and see the divisores prblm u check i here need to check n
        sum += n / i;
      }
    }
  }
  return sum === dup ? "Perfect Number" : "Not Perfect Number";
  //   if (sum ===dup) {
  //     return "Perfect number";
  //   } else {
  //     return "Not Perfect Number";
  //   }
}
console.log(perfectNum(2));

//find sqaure root of the number:(binary search)
function squareRoot(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
console.log(squareRoot(5))

function oddorEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddorEven(2));

function lastDigit(n) {
  return n % 10;
}
console.log(lastDigit(123));

function CountDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(CountDigit(78786));

function revD(x) {
  let rev = 0;
  let isNegative = x < 0;
  x = Math.abs(x);

  while (x > 0) {
    lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    rev = -rev;
  }
  return rev;
}
console.log(revD(-12345));

function checkPalindrom(n) {
  let rev = 0;
  let dup = n;
  while (n > 0) {
    lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return rev === dup ? "Palindrom" : "not";
}
console.log(checkPalindrom(131));

function amstrong(n) {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    lastDigit = n % 10;
    sum = sum + lastDigit ** 3;
    n = Math.floor(n / 10);
  }
  return sum === dup ? "amstrong" : "not";
}
console.log(amstrong(0));

function allDiv(n) {
  let arr = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i != i) {
        arr.push(n / i);
      }
    }
  }
  return arr.sort((a, b) => a - b);
}
console.log(allDiv(6).join(" "));

function isprime(n) {
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
console.log(isprime(9));

function per(n) {
  let sum = 0;
  let dup=n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      sum = sum + i;
      if (n / i != n) {
        sum = sum + n / i;
      }
    }
  }
  return sum === dup ? "perfect" : "not";
}
console.log(per(4))

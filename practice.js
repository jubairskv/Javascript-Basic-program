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



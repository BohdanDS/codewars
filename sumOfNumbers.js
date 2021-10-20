function getSum(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(getSum(-1, 3));

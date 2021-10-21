function findOdd(arr) {
  return arr.find(
    (number, index) => arr.filter((el) => el == number).length % 2
  );
}

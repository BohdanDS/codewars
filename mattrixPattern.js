function makeMatrix(m, n) {
  const n1 = n - 1;
  const digits = m.toString(10);
  const digit = (x, y) =>
    x === y || x === n1 - y
      ? 0
      : x > y && x < n1 - y
      ? 1
      : x < y && x > n1 - y
      ? 2
      : x < y && x < n1 - y
      ? 3
      : 4;

  return Array(n)
    .fill("")
    .map((_, y) =>
      Array(n)
        .fill("")
        .map((_, x) => digits[digit(x, y)])
        .join(" ")
    )
    .join("\n");
}

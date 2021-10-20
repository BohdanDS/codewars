function createPhoneNumber(numbers) {
  let code = numbers.slice(0, 3);
  let firstPart = numbers.slice(3, 6);
  let secondPart = numbers.slice(6);
  code.unshift("(");
  code.push(") ");
  firstPart.push("-");
  let phoneNumber = code.concat(firstPart, secondPart);
  return phoneNumber.join("");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

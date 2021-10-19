function likes(names) {
  let message = "";
  let arrey = [...names];
  let number = arrey.length;
  if (number === 0) {
    message = "no one likes this";
  } else if (number === 1) {
    message = `${arrey[0]} likes this`;
  } else if (number === 2) {
    message = `${arrey[0]} and ${arrey[1]} like this`;
  } else if (number === 3) {
    message = `${arrey[0]}, ${arrey[1]} and ${arrey[2]} like this`;
  } else if (number > 3) {
    message = `${arrey[0]}, ${arrey[1]} and 2 others like this`;
  }
  return message;
}
let persons = ["Bohdan", "Mike", "Peter"];
console.log(likes(persons));

function order(words) {
  let regex = /\d+/;
  let arr = words.split(" ");
  let orderedArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].match(regex);
    console.log(`${index} and ${arr[i]}`);
    orderedArray[index - 1] = arr[i];
  }
  let orderedStr = orderedArray.join(" ");
  return orderedStr;
}
let string = "is2 Thi1s T4est 3a";
order(string);

let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

let myData = myArray[2][1];
console.log(myData);

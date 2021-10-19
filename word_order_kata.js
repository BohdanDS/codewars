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

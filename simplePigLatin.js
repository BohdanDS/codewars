// Solution 1
function pigIt(str) {
  let finalArray = [];
  let regex = /^[a-zA-Z]+$/;
  const arr = str.split(" ");
  for (let item of arr) {
    if (!regex.test(item)) {
      finalArray.push(item);
    } else {
      let firstSymbol = item[0];
      let finalItem = item.substring(1) + firstSymbol + "ay";
      finalArray.push(finalItem);
    }
  }
  return finalArray.join(" ");
}
console.log(pigIt("Pig latin is cool !"));
// Solution 2
function pigIt2(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}
console.log(pigIt2("Pig latin is cooAAAl !"));

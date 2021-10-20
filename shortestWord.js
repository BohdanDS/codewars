function findShort(s) {
  const arr = s.split(" ");
  let shortestWord = arr[0].length;
  for (let item of arr) {
    console.log(`${item} and ${item.length}`);
    if (shortestWord > item.length) {
      shortestWord = item.length;
    }
  }
  return shortestWord;
}

str = "Bohdan 123 aa test x";
console.log(findShort(str));

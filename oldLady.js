var oldLadySwallows = function (animals) {
  let predator = {
    fly: "spider",
    spider: "bird",
    bird: "cat",
    cat: "dog",
    dog: "goat",
    goat: "cow",
    cow: "horse",
  };

  let arr = [];
  animals.some((animal) => {
    arr.push(animal);
    arr = arr.filter((x) => !predator[x] || !arr.includes(predator[x]));
    return animal == "horse";
  });
  return arr;
};

function abbrevName(name) {
  let spaceIndex = name.indexOf(" ");
  let abbrev = `${name[0].toUpperCase()}.${name[spaceIndex + 1].toUpperCase()}`;
  return abbrev;
}
console.log(abbrevName("bohdan peliutkevich"));

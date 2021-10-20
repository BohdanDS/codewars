function songDecoder(song) {
  const str = song.split("WUB").filter(Boolean).join(" ");
  return str;
}

console.log(songDecoder("AWUBWUBBWUBC"));

const getNumber = (max = 11, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const data = [];
let n = getNumber(41, 1);

while (n--) {
  data.push(getNumber(100))
}
console.log(data);
const getNumber = (max = 11, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => (n+"").length === 2 ? n : "0" + n;


const data = [];
let n = getNumber(41, 1);

while (n--) {
  data.push(getNumber(100))
}
console.log(data);

const box = document.querySelector('.box');

for (let val of data) {
  box.innerHTML += `<div class="card">${optimizeNumber(val)}</div>`;
 }
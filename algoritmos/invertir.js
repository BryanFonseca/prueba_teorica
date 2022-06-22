const decimal = 14;
function invertir(n) {
  const binaryArr = n.toString(2).split("");
  const length = 8 - binaryArr.length;
  const complete = [...new Array(length).fill("0"), ...binaryArr].reverse();
  return parseInt(complete.join(""), 2);
}
console.log(invertir(decimal));

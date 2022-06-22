const testArr = [7, 10, 0, 9, 11, 0, 17];

function moverCerosFin(arr) {
  const originalLength = arr.length;
  const initialArray = [];
  arr.forEach((item) => {
    if (item === 0) return;
    initialArray.push(item);
  });
  const finalLength = initialArray.length;
  for (let i = 0; i < originalLength - finalLength; i++) initialArray.push(0);
  return initialArray;
}
console.log(moverCerosFin(testArr));

const data = [
  ["Carlos", 0],
  ["Juan", 0],
  ["Maria", 1],
  ["Carlos", 3],
  ["Sofia", 4],
  ["Hernán", 1],
  ["Wilson", 2],
  ["Diana", 2],
  ["Mateo", 7],
  ["Efrain", 6],
];
function ordenar(fam) {
  return fam.sort((a, b) => {
    return a[1] - b[1];
  });
}

console.log(ordenar(data));

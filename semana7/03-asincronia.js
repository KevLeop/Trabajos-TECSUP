const saludo = () => {
  console.log("imprimiendo funcion saludo");
};

console.log("HOLA");
setTimeout(() => {
  console.log("asincrono 2seg");
}, 2000);
console.log("Como estas");
saludo();
setTimeout(() => {
  console.log("asincrono 3 seg");
}, 3000);
console.log("bien");

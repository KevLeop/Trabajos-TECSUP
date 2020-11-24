/**
 *
 */

const saludar = function () {
  console.log("Saludando");
};

saludar();

const mayor = function (a, b) {
  return a > b ? a : b;
};

console.log(mayor(540, 620));

console.log(mayor(mayor(mayor(1, 2), 3), mayor(3, 4)));

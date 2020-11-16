////// ESTRUCTURAS CONDICIONALES

// let sueldo = 3500.0;
// if (sueldo > 5000.0) {
//   console.log(`El sueldo es: ${sueldo} (Categoria Administrativo)`);
// } else {
//   console.log(`El sueldo es: ${sueldo} (Categoria Opearativo)`);
// }

// let precio = 1500.0;
// let descuento = 0.0;

// if (precio > 900) {
//   descuento = precio * 0.1; // descuento de 10 porciento
// }
// console.log(`Precio Inicial: ${precio} soles`);
// console.log(`Descuento: ${descuento} soles`);
// console.log(`Precio Final: ${precio - descuento} soles`);

/* COMPARADORES ARITMETICOS
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 * !== diferennte de
 * === igual en valor y en tipo de dato (recomendado)
 * == igal en valor sin importar el tipo de dato
 */

/*
 * Si la edad es mayor a 18 años y el año de emisión del  DNI
 * es menor a 2020,  entonces => TIENE BONO
 */
// let edad=50;
// let anioEmisionDni= 1980;

// if(edad>18){
//   if(anioEmisionDni < 2000){
//     console.log("Si hay bono");
//   }
//   else {
//     console.log(`No tiene bono porque la fecha de emision del DNI es ${anioEmisionDni}`);
//   }
// else {
//   console.log("No hay bono porque ud. no es mayor de edad");
// }
// }

// let anio = 2004;

// if (anio % 400 === 0) {
//   console.log("SI ES BISIESTO");
// } else {
//   if (anio % 4 === 0) {
//     if (anio % 100 !== 0) {
//       console.log("si es bisiesto");
//     } else {
//       console.log("No es bisiesto");
//     }
//   } else {
//     console.log("No es bisiesto");
//   }
// }

// EJERCICIO 3.4 PAGINA 89

let h = 8;
let total = 0;
if (h <= 2) {
  total = h * 5;
} else {
  if (h <= 5) {
    total = 10 + (h - 2) * 4;
  } else {
    if (h <= 10) {
      total = 22 + (h - 5) * 3;
    } else {
      total = 10 + 12 + 15 + (h - 10) * 2;
    }
  }
}
console.log(total);

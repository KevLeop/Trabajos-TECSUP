/**
 * Destructuración de Objetos
 */

let objMascota = {
  nombre: "Ruffo",
  raza: "Dogo Argentino",
  edad: 4,
  colores: ["Blanco", "Cafe", "Plomo"],
};

let { nombre } = objMascota;
let { raza } = objMascota;

console.log(`Nombre: ${nombre}, Raza:${raza} `);

/**
 * Destructurando el atributo edad en nueva variable
 * llamada anios
 */
let { edad: anios } = objMascota;
console.log(anios);

/**
 * ¿Como copiar un elemento correctamente?
 */

let objOtraMascota = { ...objMascota };
console.log(objMascota);
console.log(objOtraMascota);

objMascota.raza = "BullDog";

console.log(objMascota);
console.log(objOtraMascota);

const imprimirDatosMascota = ({ nombre, raza }) => {
  console.log(`${nombre} es un ${raza}`);
};
imprimirDatosMascota(objMascota);

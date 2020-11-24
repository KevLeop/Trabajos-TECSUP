let objPersona = {
  nombre: "Kevin",
  direccion: "Characato x y z",
  platosFavoritos: ["Ceviche", "Rocoto Relleno", "Aji de gallina"],
  objUbicacion: {
    lat: -70.1324,
    lon: -16.5135,
  },
};

// Mostrando atributos de un objeto
//Forma 1 (más usada)

console.log(objPersona.platosFavoritos);
console.log(`Latitud: ${objPersona.objUbicacion.lat}`);

// Forma 2
console.log(objPersona["direccion"]);

// Imprimir uno a uno los platos favoritos

objPersona.platosFavoritos.forEach((plato, i) => {
  console.log(`Plato ${i + 1}:${plato}`);
});

// Modificar un atributo de un objeto
objPersona.nombre = "Jorge";

console.log(objPersona);

// Objetos con atributos en forma de string

const objVehiculo = {
  marca: "Mazda",
  color: "rojo",
  "nro-llantas": 4,
};

console.log(objVehiculo["nro-llantas"]);

// creando nuevos atributos a un objeto ya establecido
objVehiculo.modelo = "CX-3";
console.log(objVehiculo);

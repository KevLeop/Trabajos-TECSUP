/**
 * Forma1: importando variables (funciones, arreglos, etc etc)
 *
 */
import { servidor, peliculas } from "./peliculas.js";

/**
 * Forma 2 importando todo lo que el archivo "peliculas.js" este
 * exportando
 * Todo lo exportado llaga en un objeto llamado  "utilidades"
 *
 */

import * as utilidades from "./peliculas.js";

console.log(utilidades.peliculas);
console.log(utilidades.servidor);

/**
 * Forma 3
 */
import generos from "./generos.js";
console.log(generos);

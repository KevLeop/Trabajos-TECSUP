import { getUsuarios } from "./servicios.js";
console.log("Primer archivo de node");

console.log("fin");

getUsuarios().then((data) => {
  console.log(data);
});

let hoy = new Date();
console.log(hoy);

/**
 * date.getFullYear() retorna el año de la fecha
 */

console.log(`Año: ${hoy.getFullYear()}`);
// console.log(`Año: ${hoy.getYear()}`); //obsoleto

/**
 * date.getMonth() retorna el número de mes de la fecha
 * teniendo en cuenta que ENERO es 0
 */

console.log(`Mes: ${hoy.getMonth()}`);

/**
 * date.getDate()
 * retorna el numero del día del mes
 */
console.log(`Dia: ${hoy.getDate()}`);

/**
 * date.getDay()
 * retorna el día de la semana donde
 * Domingo=0
 * Lunes = 1 ...
 * Sabado = 6
 */

console.log(`Nro Día: ${hoy.getDay()}`);

/**
 * date.getHours();
 * date.getMinutes();
 * date.getSeconds();
 * date.getMilliseconds();
 */

let navidad = new Date(2020, 11, 25);
let navidadMenosHoy = navidad - hoy;
// restar fechas devuelve el resultado de la diferencia en milisegundos
console.log(`${navidad - hoy} milisegundos`);
let diasParaNavidad = navidadMenosHoy / 1000 / 60 / 60 / 24;
console.log(`Faltan ${diasParaNavidad.toFixed(2)} dias para navidad`);

/**
 * setInterval ejecuta una funcion cada N milisegundos (1000)
 */

setInterval(() => {
  let fechaActual = new Date();
  let navidad = new Date(2020, 11, 25, 0, 0, 0);
  let duracion = navidad - fechaActual;
  let milisegundos = 1000;
  let msMinuto = milisegundos * 60;
  let msHora = msMinuto * 60;
  let msDia = msHora * 24;

  let diasRestantes = Math.floor(duracion / msDia);
  let horasRestantes = Math.floor((duracion % msDia) / msHora);
  let minutosRestantes = Math.floor((duracion % msHora) / msMinuto);
  let segundosRestantes = Math.floor((duracion % msMinuto) / milisegundos);

  // console.log(dias);

  console.log(
    `Quedan ${diasRestantes} dias ${horasRestantes} horas ${minutosRestantes} minutos ${segundosRestantes}  segundos para Navidad`
  );
}, 1000);

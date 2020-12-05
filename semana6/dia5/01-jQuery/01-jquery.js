let parrafos = $(".miParrafo");

// parrafos.addClass("cursiva");

parrafos[0].style.color = "red";
parrafos[0].innerHTML = "Nuevo primer parrafo";

parrafos.html("nuevos textos de los parrafos");

$("#header").click(function (e) {
  e.preventDefault();
  console.log("Se hizo click en el header");
});

let body = $("body");
console.log(body);

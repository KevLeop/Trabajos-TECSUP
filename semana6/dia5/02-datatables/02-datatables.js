$("#table_id").DataTable({
  language: {
    search: "Buscar:",
    lengthMenu: "Mostrar _MENU_ entradas",
    paginate: {
      first: "Primero",
      last: "Ultimo",
      next: "Siguiente",
      previous: "Anterior",
    },
    info: "Mostrando del _START_ al _END_ de _TOTAL_ entradas",
    infoEmpty: "Mostrando 0 al 0 de 0 entradas",
  },
  dom: "Blfrtip",
  buttons: ["copy", "excel", "pdf"],
});

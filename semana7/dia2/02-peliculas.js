const populares = document.getElementById("populares");
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const divResultados = document.getElementById("divResultados");

const dibujarPopulares = ({ results = [] }) => {
  results.forEach((peli) => {
    const div = document.createElement("div");
    div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
    div.innerHTML = `<div class="card shadow">
                      <img src="https://image.tmdb.org/t/p/w500${
                        peli.poster_path
                      }" alt="" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">
                          ${peli.title}
                        </h5>
                        <p class="card-text">
                          ${peli.overview.substr(
                            0,
                            100
                          )}... <a href="#">Leer mas</a>
                        </p>
                        <small class="text-muted">
                          ${peli.release_date}
                        </small>
                      </div>
                    </div>`;
    populares.appendChild(div);
  });
};

const getPeliculasPopulares = () => {
  const urlTMDB =
    "https://api.themoviedb.org/3/movie/popular?api_key=fe0f662e8c0920325f022b94de38ed95&language=es-ES";
  fetch(urlTMDB).then((peticion) => {
    peticion.json().then((data) => {
      dibujarPopulares(data);
    });
  });
};
getPeliculasPopulares();

const dibujarBusqueda = ({ results = [] }) => {
  results.forEach((peli) => {
    const divRes = document.createElement("div");
    divRes.classList.add(
      "col-xl-3",
      "col-lg-3",
      "col-md-4",
      "col-sm-6",
      "mb-3"
    );
    divRes.innerHTML = `<div class="card shadow">
                      <img src="https://image.tmdb.org/t/p/w500${
                        peli.poster_path
                      }" alt="" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">
                          ${peli.title}
                        </h5>
                        <p class="card-text">
                          ${peli.overview.substr(
                            0,
                            100
                          )}... <a href="#">Leer mas</a>
                        </p>
                        <small class="text-muted">
                          ${peli.release_date}
                        </small>
                      </div>
                    </div>
    `;
    divResultados.appendChild(divRes);
  });
};

formBusqueda.onsubmit = (e) => {
  e.preventDefault();
  divResultados.innerHTML = "";
  let busqueda = inputBusqueda.value;

  /**
   * encodeURI(string_con_espacios_y_simbolos)
   * Codifica un string para que pueda viajar a traves
   * de una URL.
   * Retorna el valor codificado
   */
  busqueda = encodeURI(busqueda);

  let url = `https://api.themoviedb.org/3/search/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&query=${busqueda}&page=1&include_adult=false`;

  fetch(url).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
      dibujarBusqueda(data);
    });
  });
};

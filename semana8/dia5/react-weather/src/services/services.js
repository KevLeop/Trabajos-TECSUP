const URL_BACKEND = "https://api.openweathermap.org/data/2.5/forecast";

const API_ID = "7c204510ea72d729e0853bd6ad179aaf";

export const getWeatherPerCity = async (city) => {
  const peticion = await fetch(
    `${URL_BACKEND}?q=${city}&appid=${API_ID}&units=metric`
  );
  const data = await peticion.json();
  return data;
};

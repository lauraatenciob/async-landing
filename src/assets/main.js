const API = "https://imdb-top-100-movies.p.rapidapi.com/";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "77940f28cemshf683257e66006fdp175be7jsn76da3e7aff6f",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

const searchParams = new URLSearchParams(location.search);
const idMovie = searchParams.get("id");
const titleElement = document.getElementById("movie-title");
const descriptionElement = document.getElementById("movie-description");
const imageElement = document.getElementById("movie-image");
const ratingElement = document.getElementById("movie-rating");

(async () => {
    try {
      const movieDetail = await fetchData(`${API}${idMovie}`);
      titleElement.innerText = movieDetail.title;
      descriptionElement.innerText = movieDetail.description;
      ratingElement.innerHTML = movieDetail.rating;
      imageElement.innerHTML = `<img
      class="h-full w-full object-cover sm:h-full md:h-full lg:w-full lg:h-full"
      src=${movieDetail.big_image}
      alt=""
    />`

    } catch (error) {
      console.error(error);
    }
  })();
(async () => {
  try {
    const movies = await fetchData(API);
    let view = `
      ${movies
        .map(
          (movie) => `
          <a href="/src/detail.html?id=${movie.id}">
        <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
      >
        <img src="${movie.image}" alt="" class="w-full" />
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${movie.title}
        </h3>
      </div>
  </div>
  </a>
  `
        )
        .slice(0, 4)
        .join("")}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();

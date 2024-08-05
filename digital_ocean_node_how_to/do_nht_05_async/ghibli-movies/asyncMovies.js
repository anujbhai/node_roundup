const axios = require("axios")
const fs = require("fs").promises

async function saveMovies() {
  try {
    let response = await axios.get("https://ghibliapi.vercel.app/films")
    let movie_list = ""

    response.data.forEach(movie => {
      movie_list += `${movie.title}, ${movie.release_date}\n`
    });

    await fs.writeFile("asyncMovies.csv", movie_list)
  } catch (err) {
    console.error(`Could not save the Ghibli movies to a file: ${err.message}`)
  }
}

saveMovies()


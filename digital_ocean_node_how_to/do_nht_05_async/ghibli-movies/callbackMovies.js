const request = require("request")
const fs = require("fs")

request("https://ghibliapi.vercel.app/films", (err, response, body) => {
  if (err) {
    console.error(`Could not send request to API: ${error.message}`)
    return
  }

  if (response?.statusCode !== 200) {
    console.error(`Expected status code 200 but recieved: ${response.statusCode}.`)
    return
  }

  console.log("Processing list of movies")

  const movies = JSON.parse(body)
  let movie_list = ""
  movies.forEach(movie => {
    console.log(`${movie.title}, ${movie.release_date}`)
  });

  fs.writeFile("callbackMovies.csv", movie_list, (err_writefile) => {
    if (err_writefile) {
      console.error(`Could not save the Ghibli movies to a file: ${err_writefile}`, )
      return
    }

    console.log("Saved list of movies to callbackMovies.csv")
  })
})


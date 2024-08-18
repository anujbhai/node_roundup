const http = require("http")
const host = "localhost"
const port = 8000

const books = JSON.stringify([
  {title: "The Alchemist", author: "Paulo Cohelo", year: 1988},
  {title: "The Prophet", author: "Kahlil Gibran", year: 1923},
])

const authors = JSON.stringify([
  {name: "Paulo Cohelo", country_of_birth: "Brazil", year_of_birth: 1947},
  {name: "Kahlil Gibran", country_of_birth: "Lebanon", year_of_birth: 1883},
])

const request_listener = function(req, res) {
  res.setHeader("Content-Type", "application/json")

  switch (req.url) {
    case "/books":
      res.writeHead(200)
      res.end(books)
      break
    case "/author":
      res.writeHead(200)
      res.end(authors)
      break
    default:
      res.writeHead(404)
      res.end(JSON.stringify({error: "Resource not found"}))
  }
}

const server = http.createServer(request_listener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})


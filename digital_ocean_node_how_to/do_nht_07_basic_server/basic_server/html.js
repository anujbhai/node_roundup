const http = require("http")
const host = "localhost"
const port = 8000

const request_listener = function(req, res) {
  res.setHeader("Content-Type", "text/html")
  res.writeHead(200)
  res.end(`<html><body><h1>Rendered a page directly from the server!</h1></body></html>`)
}

const server = http.createServer(request_listener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})



const http = require("http")
const host = "localhost"
const port = 8000

const request_listener = function(req, res) {
  res.setHeader("Content-Type", "application/json")
  res.writeHead(200)
  res.end(`{"message": "This is a JSON response from basic server."}`)
}

const server = http.createServer(request_listener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})


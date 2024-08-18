const http = require("http")
const host = "localhost"
const port = 8000

const request_listener = function(req, res) {
  res.setHeader("Content-Type", "text/csv")
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv")
  res.writeHead(200)
  res.end(`id,name,email\n1,Sean Sherk,sherk@beefdog.com`)
}

const server = http.createServer(request_listener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})


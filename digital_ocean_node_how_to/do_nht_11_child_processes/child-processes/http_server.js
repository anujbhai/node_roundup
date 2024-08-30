const { fork } = require("child_process")
const http = require("http")

const host = "localhost"
const port = 8000

const request_listener = function (req, res) {
  if (req.url === "/total") {
    const child = fork(__dirname + "/get_count")

    child.on("messge", (message) => {
      console.log("Returning /total results")

      res.setHeader("Content-Type", "application/json")
      res.writeHead(200)
      res.end(message)
    })

    child.send("START")
  } else if (req.url === "/hello") {
    console.log("Returning /hello results")

    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(`{"message": "hello"}`)
  }
}

const server = http.createServer(request_listener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})


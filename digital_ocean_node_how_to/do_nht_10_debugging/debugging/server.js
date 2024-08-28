const http = require("http")

const host = "localhost"
const port = 8000

const greetings = [
  "Hello World",
  "Hola Mundo",
  "Bonjour le Monde",
  "Hallo Welt",
  "Salve Mundi"
]

const get_greeting = function() {
  let greeting = greetings[Math.floor(Math.random() * greetings.length)]

  return greeting
}

const request_listener = function (req, res) {
  let message = get_greeting()

  res.setHeader("Content-Type", "application/json")
  res.writeHead(200)
  res.end(`{"message": "${message}"}`)
}

const server = http.createServer(request_listener)
server.listen(port, host, () => {
  console.log(`Server is running n http://${host}:${port}`)
})


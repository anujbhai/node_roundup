const http = require("http")
const fs = require("fs").promises
const host = "localhost"
const port = 8000

let index_file

const request_listener = function(req, res) {
  res.setHeader("Content-Type", "text/html")
  res.writeHead(200)
  res.end(index_file)

}

const server = http.createServer(request_listener)

fs.readFile(`${__dirname}/index.html`)
  .then(contents => {
    index_file = contents

    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`)
    })
  })
  .catch(err => {
    console.error(`Could not read index.html. Error: ${err}`)
    process.exit(1)
  })


const https = require("https")

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users?_limit=2",
  method: "GET",
  headers: {
    "Accept": "application/json"
  },
}

let request = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get OK from server. Code: ${res.statusCode}`)

    res.resume()

    return
  }

  let data = ""

  res.on("data", (chunk) => {
    data += chunk
  })

  res.on("close", () => {
    console.log("Retrieved all data")
    console.log(JSON.parse(data))
  })
})

request.end()

request.on("error", (err) => {
  console.error(`Encountered error trying to make a request: ${err.message}`)
})



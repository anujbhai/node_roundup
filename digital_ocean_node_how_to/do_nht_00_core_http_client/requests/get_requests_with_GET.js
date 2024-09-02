const https = require("https")

let request = https.get("https://jsonplaceholder.typicode.com/users?_limit=2", (res, req) => {
  if (res.statusCode !== 200) {
    console.error(`Did not recieve OK from the server. Code ${res.statusCode}`)
    res.resume()
    return
  }

  let data = ""

  res.on("data",  (chunk) => {
    data += chunk
  })

  res.on("close", () => {
    console.log("Retrieved all data")
    console.log(JSON.parse(data))
  })
})

request.on("error", (err) => {
  console.error(`Encountered on error trying to make a request: ${err.message}`)
})


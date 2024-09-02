const https = require("https")

// user data
const request_data = {
  username: "oneopener",
}

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users/1",
  method: "PUT",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  },
}

let request = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from server. Code: ${res.statusCode}`)

    res.resume()

    return
  }

  let data = ""

  res.on("data", (chunk) => {
    data += chunk
  })

  res.on("close", () => {
    console.log("Added all data")
    console.log(JSON.parse(data))
  })
})

request.write(JSON.stringify(request_data))

request.end()

request.on("error", (err) => {
  console.error(`Encountered error trying to make a request: ${err.message}`)
})




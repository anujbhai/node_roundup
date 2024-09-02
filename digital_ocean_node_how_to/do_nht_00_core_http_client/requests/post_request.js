const https = require("https")

// user data
const request_data = {
  name: "Ranga",
  username: "juicemaker",
  email: "ranga@avesam.com",
  address: {
    street: "Madhuri Bar",
    city: "Bangaluru",
    zipcode: "560002",
  },
  phone: "124-4210",
  website: "coming soon",
  company: {
    name: "Illuminati",
    catchPhrase: "Focus!!",
    bs: "security, recovery agency, property settlement, business holdings.",
  },
}

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  },
}

let request = https.request(options, (res) => {
  if (res.statusCode !== 201) {
    console.error(`Did not get a created from server. Code: ${res.statusCode}`)

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




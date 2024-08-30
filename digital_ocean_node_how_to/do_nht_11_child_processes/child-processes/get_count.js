const slow_func = () => {
  let counter = 0

  while (counter < 5000000000) {
    counter++
  }

  return counter
}

process.on("message", (message) => {
  if (message === "START") {
    console.log("Child process recieved START message")

    let slow_result = slow_func()
    let message = `{"total_count": ${slow_result}}`

    process.send(message)
  }
})


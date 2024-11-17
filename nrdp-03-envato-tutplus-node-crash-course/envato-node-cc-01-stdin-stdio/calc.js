process.stdin.on("data", (chunk) => {
  const user_input = chunk.toString().trim()

  if (user_input === "quit") {
    process.exit(0)
  }

  try {
    const value = eval(user_input)

    console.log(`${value}`)
  } catch (err) {
    console.log("Invalid value. Unable to evaluate user input.")
  }

  process.stdout.write("Enter a simple expression: ")
})

process.stdout.write("Enter a simple expression: ")


const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question() {
  rl.question("Enter your equation...", (user_input) => {
    if (user_input === "quit") {
      process.exit(0)
    }

    try {
      const value = eval(user_input)

      console.log(`${value}`)
    } catch (err) {
      console.log("Invalid value. Unable to evaluate user input.")
    }

    question()
  })
}
question()


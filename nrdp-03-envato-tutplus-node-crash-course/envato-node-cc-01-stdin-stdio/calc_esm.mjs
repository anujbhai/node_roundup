import * as readline from "readline"
import { stdin as input, stdout as output } from "process"

const rl = readline.createInterface({
  input,
  output,
})

function question(query) {
  return new Promise(resolve => {
    rl.question(query, resolve)
  }) 
}

let user_input = await question("Enter you equation...")

while (user_input !== "quit") {
  try {
    const value = eval(user_input)

    console.log(`${value}`)
  } catch (err) {
    console.log("Invalid value. Unable to evaluate user input.")
  }

  user_input = await question("Enter your equation...")
}

rl.close()


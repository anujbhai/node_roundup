const fs = require("fs").promises

async function read_file(file_path) {
  try {
    const data = await fs.readFile(file_path)

    console.log(data.toString())
  } catch (err) {
    console.error(`Got an error trying to read the file: ${err.message}`)
  }
}

read_file("greetings.txt")


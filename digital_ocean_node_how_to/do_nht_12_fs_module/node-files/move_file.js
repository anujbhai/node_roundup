const fs = require("fs").promises

async function move_file(src, dest) {
  try {
    await fs.rename(src, dest)

    console.log(`Moved file from ${src} to ${dest}`)
  } catch (err) {
    console.error(`An error occured when moving file: ${err.message}`)
  }
}

move_file("greetings-2.txt", "test_data/salutations.txt")


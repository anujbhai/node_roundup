const fs = require("fs").promises

async function remove_file(file_path) {
  try {
    await fs.unlink(file_path)

    console.log(`Deleted ${file_path}`)
  } catch (err) {
    console.error(`An error occurred while trying to delete the file: ${err.message}`)
  }
}

remove_file("groceries.csv")


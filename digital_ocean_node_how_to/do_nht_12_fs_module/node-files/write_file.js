const fs = require("fs").promises

async function open_file() {
  try {
    const csv_headers = "name,qty,price"

    await fs.writeFile("groceries.csv", csv_headers)
  } catch (err) {
    console.error(`Got an error trying to write to a file: ${err.message}`)
  }
}

async function add_grocery_item(name, qty, price) {
  try {
    const csv_line = `\n${name},${qty},${price}`

    await fs.writeFile("groceries.csv", csv_line, {flag: "a"})
  } catch (err) {
    console.error(`Got an error trying to write to a file: ${err.message}`)
  }
}

(async function() {
  await open_file()
  await add_grocery_item("eggs", 12, 1.50)
  await add_grocery_item("nutella", 1, 4)
})()


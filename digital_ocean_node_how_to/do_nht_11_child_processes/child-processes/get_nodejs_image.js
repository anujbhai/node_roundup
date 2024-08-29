const {execFile} = require("child_process")
const { stderr } = require("process")

execFile(__dirname + "/process_nodejs_image.sh", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`)
    return
  }

  console.log(`stdout:\n${stdout}`)
})


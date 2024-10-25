import util from "util"
import path from "path"

import {assert} from "chai"
import {
  connect,
  connected,
  get_student_repo,
  StudentRepository,
} from "../dist/index.js"

describe("Initialize Registrar", function () {
  // test not working
  before(async function () {
    try {
      await connect("registrardb.sqlite")
      console.log("db connected successfully!")
    } catch (e) {
      console.error(`Initialize Registrar failed with `, e)
      throw e
    }
  })
})

it("should successfully initialize the registrar", async function () {
  console.log("Connection status:", connected())
  assert.isTrue(connected(), "The database should be connected.")
})

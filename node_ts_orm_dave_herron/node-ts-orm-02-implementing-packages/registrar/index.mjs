import util from "util"
import path from "path"

import {assert} from "chai"
import {
  connect,
  connected,
  Student,
} from "../dist/index.js"

describe("Initialize Registrar", function () {
  before(async function () {
    try {
      await connect("registrardb.sqlite")
    } catch (e) {
      console.error(`Initialize Registrar failed with `, e)
      throw e
    }
  })
})

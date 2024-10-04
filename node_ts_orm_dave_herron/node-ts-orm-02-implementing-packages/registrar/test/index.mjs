import util from "util"
import path from "path"

import {assert} from "chai"
import {
  connect,
  connected,
  Student,
} from "../dist/index.js"
import { it } from "node:test"

describe("Initialize Registrar", function () {
  // test not working
  before(async function () {
    try {
      await connect("registrardb.sqlite")
    } catch (e) {
      console.error(`Initialize Registrar failed with `, e)
      throw e
    }
  })
})

it("should should successfully initialize the registrar", async function () {
  assert.isTrue(connected())
})

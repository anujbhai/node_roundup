const Todos = require("./index")
const assert = require("assert")
const fs = require("fs")

describe("integration test", function() {
  it("should be able to add and complete TODOs", function() {
    let todos = new Todos()

    assert.strictEqual(todos.list().length, 0)

    todos.add("get up from bed")
    assert.strictEqual(todos.list().length, 1)
    assert.deepStrictEqual(todos.list(), [{title: "get up from bed", completed: false}])

    todos.add("go out")
    assert.strictEqual(todos.list().length, 2)
    assert.deepStrictEqual(todos.list(), [
      {title: "get up from bed", completed: false},
      {title: "go out", completed: false},
    ])
  })
})

describe("complete()", function() {
  it("should fail when there are no TODOs", function() {
    let todos = new Todos()
    const expectedError = new Error("You have no Todos stored. Why don\'t you add one first?")

    assert.throws(() => {
      todos.complete("doesn't exist")
    }, expectedError)
  })
})

describe("saveToFile()", function() {
  it("should have a single TODO", function(done) {
    let todos = new Todos()

    todos.add("save a CSV")
    todos.saveToFile((err) => {
      assert.strictEqual(fs.existsSync("todos.csv"), true)

      let expectedFileContents = "Title, Completed\nsave a CSV, false\n"
      let content = fs.readFileSync("todos.csv").toString()

      assert.strictEqual(content, expectedFileContents)
      done(err)
    })
  })
})


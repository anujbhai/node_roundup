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
  // HOOKS | TEST FIXTURES
  beforeEach(function() {
    this.todos = new Todos()
    this.todos.add("save a CSV")
  })

  afterEach(function() {
    if (fs.existsSync("todos.csv")) {
      fs.unlinkSync("todos.csv")
    }
  })

  // - CALLBACK TEST Eg.
  // it("should have a single TODO", function(done) {

  // - PROMISE TEST Eg.
  // it("should have a single TODO", function() {

  // - ASYNC/AWAIT Eg.
  it("should have a single TODO without error", async function() {
    // - CALLBACK TEST Eg.
    // let todos = new Todos()
    //
    // todos.add("save a CSV")
    // todos.saveToFile((err) => {
      // assert.strictEqual(fs.existsSync("todos.csv"), true)
      //
      // let expectedFileContents = "Title, Completed\nsave a CSV, false\n"
      // let content = fs.readFileSync("todos.csv").toString()
      //
      // assert.strictEqual(content, expectedFileContents)
      // done(err)
    // })

    // - PROMISE TEST Eg.
    // let todos = new Todos()
    //
    // todos.add("save a CSV")
    // return todos.saveToFile().then(() => {
      // assert.strictEqual(fs.existsSync("todos.csv"), true)
      //
      // let expectedFileContents = "Title, Completed\nsave a CSV, false\n"
      // let content = fs.readFileSync("todos.csv").toString()
      //
      // assert.strictEqual(content, expectedFileContents)
    // })
    
    // - ASYNC/AWAIT Eg.
    await this.todos.saveToFile()

    assert.strictEqual(fs.existsSync("todos.csv"), true)

    let expectedFileContents = "Title, Completed\nsave a CSV, false\n"
    let content = fs.readFileSync("todos.csv").toString()

    assert.strictEqual(content, expectedFileContents)
  })

  it("should have a single TODO that\'s completed", async function() {
    this.todos.complete("save a CSV")
    await this.todos.saveToFile()

    assert.strictEqual(fs.existsSync("todos.csv"), true)

    let expectedFileContents = "Title, Completed\nsave a CSV, true\n"
    let content = fs.readFileSync("todos.csv").toString()

    assert.strictEqual(content, expectedFileContents)
  })
})


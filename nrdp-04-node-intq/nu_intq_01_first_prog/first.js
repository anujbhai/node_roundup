// const calc_obj = require("./calc")
//
// console.log(calc_obj.add(80, 19))
// console.log(calc_obj.subtract(80, 19))
// console.log(calc_obj.multiply(80, 19))
// console.log(calc_obj.divide(80, 19))

// const obj = {
//   a: "Original value",
//   b: 6,
// }
//
// console.log(obj.a);
// obj.a = "New value";
// console.log(obj.a);
//
// obj.b = obj.b + 10;
// console.log(obj.b);

// console.log(module)

// let i = 1;
//
// function start_counter() {
//   timer_obj = setInterval(() => {
//     if (i <= 5) {
//       console.log(i)
//       i++
//     } else {
//       clearInterval(timer_obj)
//     }
//   }, 1000)
// }
// start_counter()

// console.log("Hello " + process.argv[2])

// process.on("beforeExit", () => {
//   console.log("Before exit fired!")
// })
//
// process.on("exit", () => {
//   console.log("Exit event fired!")
// })
//
// console.log("Process started")

// const chalk = require("chalk")
//
// console.log(chalk.bgMagenta.bold("Hello World!"))
// console.log(chalk.bgBlueBright("from southwest station!"))

const os = require("os")
console.log(os.hostname())
console.log(os.freemem())
console.log(os.platform())
console.log(os.arch())


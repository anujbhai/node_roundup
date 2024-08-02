const colors = require("colors")
const chosen_color = colors.getRandomColor()
const fav_color = colors.getBlue()

console.log(`You should use ${chosen_color.name} on your website. It\'s HTML cade is ${chosen_color.code}`)
console.log(`My favorite color is ${fav_color.name}/${fav_color.code}, btw`)


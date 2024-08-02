class Color {
  constructor(name, code) {
    this.name = name
    this.code = code
  }
}

const all_colors = [
  new Color("brightred", "#E74C3C"),
  new Color("soothingpurple", "#9B59B6"),
  new Color("skyblue", "#5DADE2"),
  new Color("leafygreen", "#48C980"),
  new Color("sunkissedyellow", "#F4D03F"),
  new Color("groovygray", "#D7DBDD"),
]

exports.getRandomColor = () => {
  return all_colors[Math.floor(Math.random() * all_colors.length)]
}

exports.all_colors = all_colors

exports.getBlue = () => all_colors[2]


const fs = require("fs")

const read_file = () => {
  let data = fs.readFileSync("sentences.txt") // load data as buffer object
  let sentences = data.toString() // return buffer object as string

  return sentences
}

const get_words = (text) => {
  let all_sentences = text.split("\n")
  let flat_sentence = all_sentences.join(" ")
  let words = flat_sentence.split(" ")

  words = words.map((word) => word.trim().toLowerCase())

  return words
}

const count_words = (words) => {
  let map = {}

  words.forEach((word) => {
    debugger
    if (!(word in map)) {
      map[word] = 1
    } else {
      map[word] += 1
    }
    debugger
  });

  return map
}

module.exports = {
  read_file,
  get_words,
  count_words,
}


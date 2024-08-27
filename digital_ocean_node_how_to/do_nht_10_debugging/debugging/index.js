const text_helper = require("./text_helper")

const stop_words = ['i', 'me', 'my', 'myself', 'we', 'our', 'ou rs', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yoursel ves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'he rself', 'it', 'its', 'itself', 'they', 'them', 'their', 'their s', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'tha t', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'b ecause', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'wit h', 'about', 'against', 'between', 'into', 'through', 'during' , 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'do wn', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'furt her', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'o ther', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'sam e', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'jus t', 'don', 'should', 'now', '']

let sentences = text_helper.read_file()
let words = text_helper.get_words(sentences)
let word_counts = text_helper.count_words(words)
let max = -Infinity
let most_popular = ""

Object.entries(word_counts).forEach(([word, count]) => {
  if (stop_words.indexOf(word) === -1) {
    if (count > max) {
      max = count
      most_popular = word
    }
  }
})

console.log(`The most popular word in the text is "${most_popular}" with ${max} occurences.`)


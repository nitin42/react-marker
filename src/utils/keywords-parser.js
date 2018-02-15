const retext = require('retext')
const keywords = require('retext-keywords')
const nlcstToString = require('nlcst-to-string')

const keywordParser = (text, store, maxKeywords) => {
  retext()
    .use(keywords, { maximum: maxKeywords })
    .process(text, (err, file) => {
      file.data.keywords.forEach(keyword => {
        const name = nlcstToString(keyword.matches[0].node)
        store.push(name)
      })
    })
  return store
}

export {
  keywordParser
}

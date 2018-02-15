const unified = require('unified')
const emoji = require('retext-emoji')
const english = require('retext-english')
const stringify = require('retext-stringify')

const textParser = unified()
  .use(english)
  .use(emoji, { convert: 'encode' })
  .use(stringify)

export {
  textParser
}

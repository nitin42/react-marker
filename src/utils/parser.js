import { keywordParser } from './keywords-parser'
import { textParser } from './language-parser'

const parser = (text, options={}) => {
  if (options.parseKeywords) {
    keywordParser(text, options.keywordsStore, options.maxKeywords)
  }

  return textParser.runSync(textParser.parse(text))
}

export {
  parser
}

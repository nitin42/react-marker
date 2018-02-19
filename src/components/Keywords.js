import * as React from 'react'
import PropTypes from 'prop-types'

import { visitor } from '../utils/node-visitor'
import { marker } from '../utils/marker'
import { parser } from '../utils/parser'

import { getHueRange } from '../styles'

export class Keywords extends React.Component {
  static displayName = "Keywords"

  keywordsStore = []
  marked = []
  idx = 0

  static propTypes = {
    color: PropTypes.string,
    maxKeywords: PropTypes.number,
    text: PropTypes.string
  }

  getColor = () => this.props.color || getHueRange()

  getKeywordStyles = node => ({
    backgroundColor: this.getColor(visitor(node)),
  })

  getKeywordProps = (node) => ({
    key: node.value !== undefined ? `${node.value}` : 'keyword - ' + i,
    style: this.getKeywordStyles(node),
  })

  highlighter = node => marker(node, this.getElement)

  getElement = node => {
    const result = 'value' in node ? node.value : this.highlighter(node)

    if (this.keywordsStore.includes(result) && !this.marked.includes(result)) {
      this.idx++
      this.marked.push(result)
      return React.createElement('span', this.getKeywordProps(node), result)
    }

    return result
  }

  render() {
    return (
      <React.Fragment>
        {this.highlighter(
          parser(this.props.text, {
            parseKeywords: true,
            keywordsStore: this.keywordsStore,
            maxKeywords: this.props.maxKeywords,
          })
        )}
      </React.Fragment>
    )
  }
}

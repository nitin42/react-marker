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
  i = 0

  static propTypes = {
    color: PropTypes.string,
    maxKeywords: PropTypes.number,
    text: PropTypes.string
  }

  color = () => this.props.color || getHueRange()

  keywordStyles = node => ({
    backgroundColor: this.color(visitor(node)),
  })

  keywordProps = (node) => ({
    key: node.value !== undefined ? `${node.value}` : 'keyword - ' + i,
    style: this.keywordStyles(node),
  })

  highlighter = node => marker(node, this.getElement)

  getElement = node => {
    let result = 'value' in node ? node.value : this.highlighter(node)

    if (this.keywordsStore.includes(result) && !this.marked.includes(result)) {
      this.i++
      this.marked.push(result)
      result = React.createElement('span', this.keywordProps(node), result)
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

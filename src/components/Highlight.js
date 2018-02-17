import * as React from 'react'
import PropTypes from 'prop-types'

import { visitor } from '../utils/node-visitor'
import { marker } from '../utils/marker'
import { parser } from '../utils/parser'

import { hues } from '../styles'

export class Highlight extends React.Component {
  idx = 0

  static propTypes = {
    text: PropTypes.string
  }

  getColor = count => {
    const val = count < hues.length ? hues[count] : hues[hues.length - 1]
    return 'hsl(' + [val, '91%', '83%'].join(', ') + ')'
  }

  highlighter = node => marker(node, this.getElement)

  getSentenceStyles = node => ({
    backgroundColor: this.getColor(visitor(node))
  })

  getSentenceProps = (node) => ({
    key: 'sentence - ' + this.idx,
    style: this.getSentenceStyles(node),
  })

  getElement = node => {
    const result = 'value' in node ? node.value : this.highlighter(node)

    if (node.type === 'SentenceNode') {
      this.idx++
      return React.createElement('span', this.getSentenceProps(node), result)
    }

    return result
  }

  render() {
    return (
      <React.Fragment>
        {this.highlighter(parser(this.props.text))}
      </React.Fragment>
    )
  }
}

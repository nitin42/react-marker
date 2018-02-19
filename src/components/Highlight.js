import * as React from 'react'
import PropTypes from 'prop-types'

import { visitor } from '../utils/node-visitor'
import { marker } from '../utils/marker'
import { parser } from '../utils/parser'

import { hues } from '../styles'

export class Highlight extends React.Component {
  static displayName = "Highlight"
  
  i = 0

  static propTypes = {
    text: PropTypes.string
  }

  color = count => {
    const val = count < hues.length ? hues[count] : hues[hues.length - 1]
    return 'hsl(' + [val, '91%', '83%'].join(', ') + ')'
  }

  highlighter = node => marker(node, this.getElement)

  getElement = node => {
    let result = 'value' in node ? node.value : this.highlighter(node)
    if (node.type === 'SentenceNode') {
      this.i++
      result = React.createElement(
        'span',
        {
          key: 'sentence - ' + this.i,
          style: { backgroundColor: this.color(visitor(node)) },
        },
        result
      )
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

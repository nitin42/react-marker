import React from 'react'
import ReactDOM from 'react-dom'

import {Highlight, Keywords } from '../build/react-marker.min.js'
import { samples } from '../src/samples'

const TEXT = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.
`

class Template extends React.Component {
  state = {
    text: 'H',
  }

  render() {
    return (
      <div style={{ fontWeight: '12px', lineHeight: 1.7 }}>
        <Keywords text={TEXT} maxKeywords={13} />
      </div>

    )
  }
}

ReactDOM.render(<Template />, document.getElementById('container'))

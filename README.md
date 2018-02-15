# react-marker
![size-label](https://img.shields.io/badge/size-13.5%20KB-green.svg)

> 🖍️ &nbsp;Highlight keywords and add colors to your text

<p align="center">
  <img src="https://i.gyazo.com/e171708aae97bb29344b7ff712038166.png" />
</p>

## Install

```
npm install react-marker
```

This package also depends on React, so make sure you've already installed it.

## Usage

**Highlighting keywords**

To highlight keywords automatically in your text, use `Keywords` component. Here is an example -

```js
import React from 'react'
import ReactDOM from 'react-dom'

import {Keywords} from 'react-marker'

const TEXT = `
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
`

class App extends React.Component {
  render() {
    return (
      <Keywords
        text={TEXT}
        maxKeywords={8}
        color="mistyrose"
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
```

This then renders to -

<p align="center">
  <img src="https://i.gyazo.com/95d3cf49238a1c020230d541fdaf81ab.png" />
</p>

**Highlight the text with different colors**

> This was inspired by [Titus Wormer's](http://wooorm.com) work

```js
import React from 'react'
import ReactDOM from 'react-dom'

import {Highlight} from 'react-marker'

const TEXT = `
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
`

class App extends React.Component {
  render() {
    return (
      <Highlight text={TEXT} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
```

This renders to -

<p align="center">
  <img src="https://i.gyazo.com/d27007ba53ff2076144b9655a1854778.png" />
</p>

Another example -

<p align="center">
  <img src="https://i.gyazo.com/923a4720cc0e64837b2f00145b33b815.png" />
</p>

## API

`react-marker` exposes only two components, `Highlight` and `Keywords`.

### Components

* #### Keywords

Highlight keywords in your text.

| Props        | Default value           | Description  |
| ------------- |:-------------:| -----:|
| `text`    | "" | Text paragraph |
| `maxKeywords`   | 5      |   Max. no of keywords to highlight |
| `color` | `hsl(60, 91%, 83%)`      |    Color used to highlight the keywords |

* #### Highlight

Highlight your text with different hue range.

| Props        | Default value          | Description  |
| ------------- |:-------------:| -----:|
| `text`    | "" | Text paragraph |

## TODO

- [ ] Gatsby plugin

## License

MIT

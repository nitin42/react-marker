const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const output = () => ({
  filename: 'react-marker.min.js',
  path: path.resolve(__dirname, '../build'),
  publicPath: '/',
  libraryTarget: 'umd',
})

const externals = () => ({
  'nlcst-to-string': 'nlcst-to-string',
  retext: 'retext',
  'retext-emoji': 'retext-emoji',
  'retext-english': 'retext-english',
  'retext-keywords': 'retext-keywords',
  unified: 'unified',
  'unist-util-visit': 'unist-util-visit',
  'prop-types': 'prop-types'
})

const jsLoader = () => ({
  test: /\.js$/,
  include: path.resolve(__dirname, '../src'),
  exclude: ['node_modules', 'public'],
  use: 'babel-loader',
})

const plugins = () => [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new UglifyJSPlugin(),
]

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: output(),
  target: 'web',
  externals: externals(),
  devtool: 'inline-source-map',
  module: {
    rules: [jsLoader()],
  },
  plugins: plugins(),
}

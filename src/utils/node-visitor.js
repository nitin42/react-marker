const visit = require('unist-util-visit')

function visitor(node) {
  var value = 0

  visit(node, 'WordNode', add)

  return value

  function add() {
    value++
  }
}

export {
  visitor
}

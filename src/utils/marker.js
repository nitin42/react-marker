const marker = (node, createElement) => {
  let children = node.children
  const length = children.length
  let index = -1
  let results = []

  while (++index < length) {
    results = results.concat(createElement(children[index]))
  }

  return results
}

export {
  marker,
}

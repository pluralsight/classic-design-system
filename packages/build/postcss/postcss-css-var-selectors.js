const postcss = require('postcss')

const dashify = require('../css/dashify')

const defaultOptions = { propNameTests: [] }

module.exports = postcss.plugin('postcss-css-var-selectors', function (
  options
) {
  const matchCssVarSelector = /^--?/
  options = Object.assign({}, defaultOptions, options)

  return function (root, result) {
    root.walkRules(rule => {
      rule.walkDecls(matchCssVarSelector, decl => {
        const selectors = createVarSelectors(decl, options)
        selectors.forEach(node => decl.root().insertAfter(decl.root(), node))
      })
    })

    root.walkRules(':root', rule => {
      rule.remove()
    })
  }
})

function createVarSelectors(decl, options) {
  const prop = dashify(decl.prop)
  const value = decl.value

  let foundDecl = options.propNameTests.find(t => t.match.test(decl.prop))
  if (!foundDecl) foundDecl = { props: [] }

  return foundDecl.props.map((p, i, newProps) => {
    const selector = '.' + prop + (newProps.length > 1 ? `--${p}` : '')
    const decl = postcss.decl({ prop: p, value })
    const rule = postcss.rule({ selector })
    rule.append(decl)
    return rule
  })
}

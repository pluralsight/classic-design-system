const postcss = require('postcss')

const dashify = require('../css/dashify')

const defaultOptions = { propNameTests: [] }

const createSelectorsForVar = (decl, options) => {
  const prop = dashify(decl.prop)
  const value = decl.value
  return (
    options.propNameTests.find(t => t.match.test(decl.prop)) || {
      props: []
    }
  ).props.map((p, i, newProps) =>
    postcss.parse(`
.${prop + (newProps.length > 1 ? `--${p}` : '')} { ${p}: ${value}; }
`)
  )
}

module.exports = postcss.plugin('css-var-selectors', options => {
  return css => {
    options = Object.assign({}, defaultOptions, options)

    css.walkRules(rule => {
      rule.walkDecls((decl, i) => {
        const isCssVar = /^--/.test(decl.prop)
        if (isCssVar) {
          createSelectorsForVar(decl, options).forEach(node =>
            decl.root().insertAfter(decl.root(), node)
          )
        }
      })

      const isCssVarRoot = rule.selector === ':root'
      if (isCssVarRoot) rule.remove()
    })
  }
})

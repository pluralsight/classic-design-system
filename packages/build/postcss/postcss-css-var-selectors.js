const dashify = require('dashify')
const postcss = require('postcss')

const defaultOptions = {
  formatPropName(name, options) {
    const tests = Array.isArray(options.propNameTests) ? options.tests : []
    const match = tests.find(t => t.match.test(name))
    return match ? match.prop : options.defaultPropName || 'color'
  }
}

const createSelectorForVar = (decl, options) => {
  const prop = dashify(decl.prop)
  const value = decl.value
  return postcss.parse(`
.${prop} { ${options.formatPropName(decl.prop, options)}: ${value}; }
`)
}

module.exports = postcss.plugin('css-var-selectors', options => {
  return css => {
    options = Object.assign({}, defaultOptions, options)

    css.walkRules(rule => {
      rule.walkDecls((decl, i) => {
        const isCssVar = /^--/.test(decl.prop)
        if (isCssVar)
          decl
            .root()
            .insertAfter(decl.root(), createSelectorForVar(decl, options))
      })

      const isCssVarRoot = rule.selector === ':root'
      if (isCssVarRoot) rule.remove()
    })
  }
})

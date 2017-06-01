const dashify = require('dashify')
const postcss = require('postcss')

const defaultOptions = {
  transformPropName(x) {
    return x
  }
}

const createSelectorForVar = (decl, options) => {
  const prop = dashify(decl.prop)
  const value = decl.value
  const node = postcss.parse(`
.${prop} { ${options.transformPropName(decl.prop)}: ${value}; }
`)

  decl.root().insertAfter(decl.root(), node)
}

module.exports = postcss.plugin('css-var-selectors', options => {
  return css => {
    options = options || defaultOptions

    css.walkRules(rule => {
      rule.walkDecls((decl, i) => {
        const isCssVar = /^--/.test(decl.prop)
        if (isCssVar) createSelectorForVar(decl, options)
      })
      // TODO: instead, remove parents with no decls
      const isCssVarRoot = rule.selector === ':root'
      if (isCssVarRoot) rule.remove()
    })
  }
})

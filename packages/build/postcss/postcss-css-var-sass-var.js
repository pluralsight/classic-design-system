const dashify = require('dashify')
const postcss = require('postcss')

const createSassVar = (decl, options) => {
  const node = postcss.parse(`
$${dashify(decl.prop.replace('--', ''))}: ${decl.value};
`)

  decl.root().insertAfter(decl.root(), node)
}

module.exports = postcss.plugin('css-var-selectors', options => {
  return css => {
    options = options || {}

    css.walkRules(rule => {
      rule.walkDecls((decl, i) => {
        const isCssVar = /^--/.test(decl.prop)
        if (isCssVar) createSassVar(decl, options)
      })

      const isCssVarRoot = rule.selector === ':root'
      if (isCssVarRoot) rule.remove()
    })
  }
})

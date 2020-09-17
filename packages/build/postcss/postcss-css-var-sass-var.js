const postcss = require('postcss')

const dashify = require('../css/dashify')

module.exports = postcss.plugin('postcss-css-var-sass-var', function () {
  const matchCssVarSelector = /^--?/

  return function (root, result) {
    root.walkRules(rule => {
      rule.walkDecls(matchCssVarSelector, decl => {
        const sassDecl = createSassVarDecl(decl)
        decl.root().insertAfter(decl.root(), sassDecl)
      })
    })

    root.walkRules(':root', rule => {
      rule.remove()
    })
  }
})

function createSassVarDecl(decl) {
  const name = `${dashify(decl.prop.replace('--', ''))}`

  return postcss.decl({ prop: '$' + name, value: decl.value })
}

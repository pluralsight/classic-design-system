module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const mjsRules = webpackConfig.module.rules[1].oneOf.filter((rule) => {
        if (Array.isArray(rule.test)) {
          return !!rule.test.find((test) => test.test('.mjs'))
        } else {
          return rule.test?.test('.mjs')
        }
      })

      mjsRules.forEach((rule) => {
        rule.resolve = {
          mainFields: ['module', 'main'],
        }
      })

      return webpackConfig
    },
  },
}

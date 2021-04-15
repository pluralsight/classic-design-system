module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const jsRules = webpackConfig.module.rules[1].oneOf.filter(rule => {
        if (Array.isArray(rule.test)) {
          return !!rule.test.find(test => test.test('.js'))
        } else {
          return rule.test?.test('.js')
        }
      })

      jsRules.forEach(rule => {
        rule.resolve = {
          mainFields: ['module', 'main']
        }
      })

      return webpackConfig
    }
  }
}

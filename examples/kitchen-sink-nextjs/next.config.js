const withTM = require('next-transpile-modules')([
  '@pluralsight/ps-design-system-actionmenu',
  '@pluralsight/ps-design-system-appframe',
  '@pluralsight/ps-design-system-avatar',
  '@pluralsight/ps-design-system-badge',
  '@pluralsight/ps-design-system-banner',
  '@pluralsight/ps-design-system-breadcrumb',
  '@pluralsight/ps-design-system-build',
  '@pluralsight/ps-design-system-button',
  '@pluralsight/ps-design-system-card',
  '@pluralsight/ps-design-system-carousel',
  '@pluralsight/ps-design-system-checkbox',
  '@pluralsight/ps-design-system-circularprogress',
  '@pluralsight/ps-design-system-collapsible',
  '@pluralsight/ps-design-system-core',
  '@pluralsight/ps-design-system-datawell',
  '@pluralsight/ps-design-system-datepicker',
  '@pluralsight/ps-design-system-dialog',
  '@pluralsight/ps-design-system-drawer',
  '@pluralsight/ps-design-system-dropdown',
  '@pluralsight/ps-design-system-emptystate',
  '@pluralsight/ps-design-system-errors',
  '@pluralsight/ps-design-system-featureflags',
  '@pluralsight/ps-design-system-field',
  '@pluralsight/ps-design-system-focusmanager',
  '@pluralsight/ps-design-system-form',
  '@pluralsight/ps-design-system-halo',
  '@pluralsight/ps-design-system-icon',
  '@pluralsight/ps-design-system-layout',
  '@pluralsight/ps-design-system-linearprogress',
  '@pluralsight/ps-design-system-link',
  '@pluralsight/ps-design-system-menu',
  '@pluralsight/ps-design-system-multiselect',
  '@pluralsight/ps-design-system-navbar',
  '@pluralsight/ps-design-system-navbrand',
  '@pluralsight/ps-design-system-navcookiebanner',
  '@pluralsight/ps-design-system-navitem',
  '@pluralsight/ps-design-system-navuser',
  '@pluralsight/ps-design-system-normalize',
  '@pluralsight/ps-design-system-note',
  '@pluralsight/ps-design-system-position',
  '@pluralsight/ps-design-system-radio',
  '@pluralsight/ps-design-system-row',
  '@pluralsight/ps-design-system-screenreaderonly',
  '@pluralsight/ps-design-system-scrollable',
  '@pluralsight/ps-design-system-searchinput',
  '@pluralsight/ps-design-system-select',
  '@pluralsight/ps-design-system-starrating',
  '@pluralsight/ps-design-system-steps',
  '@pluralsight/ps-design-system-storybook-addon-center',
  '@pluralsight/ps-design-system-storybook-addon-theme',
  '@pluralsight/ps-design-system-storybook-preset',
  '@pluralsight/ps-design-system-switch',
  '@pluralsight/ps-design-system-tab',
  '@pluralsight/ps-design-system-table',
  '@pluralsight/ps-design-system-tag',
  '@pluralsight/ps-design-system-tagsinput',
  '@pluralsight/ps-design-system-text',
  '@pluralsight/ps-design-system-textarea',
  '@pluralsight/ps-design-system-textinput',
  '@pluralsight/ps-design-system-theme',
  '@pluralsight/ps-design-system-tooltip',
  '@pluralsight/ps-design-system-typeahead',
  '@pluralsight/ps-design-system-util',
  '@pluralsight/ps-design-system-verticaltabs',
  '@pluralsight/ps-design-system-viewtoggle'
])

module.exports = withTM({
  future: {
    webpack5: true
  }
})

// module.exports = {
//   webpack(config, { isServer }) {
//     console.log('externals', config.externals.toString())
//     return {
//       ...config,
//       externals: [
//         (context, request, callback) =>
//           function handleExternals(context, request) {
//             return (resolveContext, requestToResolve) => {
//               console.log('resolve', requestToResolve)
//               return new Promise(resolve =>
//                 resolve(
//                   require.resolve(requestToResolve, { paths: [resolveContext] })
//                 )
//               ).then(result => callback(undefined, result), callback)
//             }
//           }
//       ],
//       resolve: {
//         ...config.resolve,
//         mainFields: isServer
//           ? ['module', 'main']
//           : ['browser', 'module', 'main']
//       }
//     }
//   }
// }

// module.exports = {
//   webpack(config) {
//     config.externals = []
//     return config
//   }
// }

// module.exports = {
//   webpack: (config, { isServer }) => {
//     return {
//       ...config,
//       resolve: {
//         ...config.resolve,
//         mainFields: isServer
//           ? ['module', 'main']
//           : ['browser', 'module', 'main']
//       }
//     }
//   }
// }

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     const jsRules = config.module.rules.filter(rule => {
//       if (Array.isArray(rule.test)) {
//         return !!rule.test.find(test => test.test('.js'))
//       } else {
//         return rule.test?.test('.js')
//       }
//     })

//     jsRules.forEach(rule => {
//       rule.resolve = {
//         mainFields: ['module', 'main']
//       }
//     })

//     console.log('rules', config.module.rules)
//     return config
//   }
// }

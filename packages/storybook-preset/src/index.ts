import { join } from 'path'
import { merge as wpMerge } from 'webpack-merge'

const addons = {
  actions: '@storybook/addon-actions',
  a11y: '@storybook/addon-a11y',
  center: '@pluralsight/ps-design-system-storybook-addon-center',
  theme: '@pluralsight/ps-design-system-storybook-addon-theme',
  viewport: '@storybook/addon-viewport'
}

type Options = { [K in keyof typeof addons]?: Option }
type Option = boolean | Record<string, unknown>

export function config(entry = [], options: Options = {}) {
  const entries = Object.keys(addons)
    .filter(key => optionEnabled(options[key]))
    .map(key => addons[key])
    .reduce((acc, pkgName) => {
      let addonSupportsPreview = false

      try {
        const preview = join(pkgName, 'preview')
        acc = acc.concat(require.resolve(preview))

        addonSupportsPreview = true

        // eslint-disable-next-line
      } catch (err) {}

      if (!addonSupportsPreview) {
        try {
          const preset = join(pkgName, 'preset')
          const { config: presetConfig } = require(require.resolve(preset))
          acc = acc.concat(presetConfig())

          // eslint-disable-next-line
        } catch (err) {}
      }

      return acc
    }, [])

  return [require.resolve('./default-params'), ...entry, ...entries]
}

export function managerEntries(entry = [], options: Options = {}) {
  const entries = Object.keys(addons)
    .filter(key => optionEnabled(options[key]))
    .map(key => addons[key])
    .reduce((acc, pkgName) => {
      try {
        const register = join(pkgName, 'register')
        acc = acc.concat(require.resolve(register))
        // eslint-disable-next-line
      } catch (err) {}

      return acc
    }, [])

  return [...entry, ...entries]
}

export async function webpack(baseConfig) {
  return wpMerge(baseConfig, {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.(ts|js)x?$/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx']
    }
  })
}

function optionEnabled(val?: boolean) {
  if (typeof val === 'boolean' && val === false) return false
  return true
}

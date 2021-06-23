import { join } from 'path'
import { merge as wpMerge } from 'webpack-merge'

const addons = {
  actions: '@storybook/addon-actions',
  a11y: '@storybook/addon-a11y',
  center: '@pluralsight/ps-design-system-storybook-addon-center',
  postcss: '@storybook/addonn-postcss',
  theme: '@pluralsight/ps-design-system-storybook-addon-theme',
  viewport: '@storybook/addon-viewport'
}

type Options = { [K in keyof typeof addons]?: Option }
type Option = boolean | Record<string, unknown>

export function config(entry = [], options: Options = {}) {
  function getEntriesFromPreview(pkgName: string) {
    try {
      const preview = join(pkgName, 'preview')
      return require.resolve(preview)
    } catch (err) {}
  }

  function getEntriesFromPresets(pkgName: string) {
    try {
      const preset = join(pkgName, 'preset')
      const { config: presetConfig } = require(require.resolve(preset))
      return presetConfig()
    } catch (err) {}
  }

  const entries = Object.keys(addons)
    .filter(key => optionEnabled(options[key]))
    .map(key => addons[key])
    .reduce((acc, pkgName) => {
      const pkgEntries =
        getEntriesFromPreview(pkgName) || getEntriesFromPresets(pkgName) || []

      return acc.concat(pkgEntries)
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

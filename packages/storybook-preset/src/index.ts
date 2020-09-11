interface Options {
  center?: boolean
}

export function config(entry: any[] = [], options: Options) {
  const { center } = options

  if (optionEnabled(center))
    entry = entry.concat(require.resolve('./decorators/center'))

  return entry
}

export function managerEntries(entry = [], options: Options) {
  entry = entry.concat([
    require.resolve('@storybook/addon-actions/register'),
    require.resolve('@storybook/addon-viewport/register')
  ])

  return entry
}

function optionEnabled(val?: boolean) {
  if (typeof val === 'boolean' && val === false) return false

  return true
}

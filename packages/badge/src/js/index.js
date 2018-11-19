import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'
import { appearances } from '../vars'

export const buildAppearanceClass = appearance =>
  `.psds-badge--appearance-${appearance}`

export const buildColorClass = color => `.psds-badge--color-${color}`

export const buildThemeClass = theme => `.psds-badge--theme-${theme}`

export const buildCompoundClass = obj => {
  const {
    appearance = appearances.default,
    theme = themeNames.dark,
    color
  } = obj

  return (
    buildAppearanceClass(appearance) +
    buildThemeClass(theme) +
    buildColorClass(color)
  )
}

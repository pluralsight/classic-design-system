import { appearances } from '../vars/index.js'

export function defaultWithColor(c) {
  return appearance(appearances.default) + color(c)
}

export function subtleThemeWithColor(themeName, c) {
  return appearance(appearances.subtle) + theme(themeName) + color(c)
}

function appearance(a) {
  return `.psds-badge--appearance-${a}`
}

function color(c) {
  return `.psds-badge--color-${c}`
}

function theme(t) {
  return `.psds-theme--${t}`
}

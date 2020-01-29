export function select(themeName, appearance, color) {
  return (
    '.psds-badge--apearance-' +
    appearance +
    '.psds-badge--color-' +
    color +
    '.psds-theme--' +
    themeName
  )
}

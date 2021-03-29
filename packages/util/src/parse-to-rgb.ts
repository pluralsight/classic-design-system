export const parseToRgb = (hex: string, alpha?: number) => {
  const prefix = alpha ? 'rgba(' : 'rgb('
  const base = `${parseInt(`${hex[1]}${hex[2]}`, 16)},${parseInt(
    `${hex[3]}${hex[4]}`,
    16
  )},${parseInt(`${hex[5]}${hex[6]}`, 16)}`
  const suffix = alpha ? `,${alpha})` : ')'
  return prefix + base + suffix
}

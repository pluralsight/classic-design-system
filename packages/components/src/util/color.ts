export function transparentize(amount: number, hex: string) {
  return rgba({
    ...parseToRgb(hex),
    a: (100 - amount * 100) / 100
  })
}

function rgba(color: { r: number; g: number; b: number; a: number }) {
  return `rgba(${color.r},${color.g},${color.b},${color.a})`
}

function parseToRgb(hex: string) {
  return {
    r: parseInt(`${hex[1]}${hex[2]}`, 16),
    g: parseInt(`${hex[3]}${hex[4]}`, 16),
    b: parseInt(`${hex[5]}${hex[6]}`, 16)
  }
}

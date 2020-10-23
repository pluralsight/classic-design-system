export const toPercentageString = (num: number): string => {
  try {
    return Math.min(parseFloat(num.toFixed()), 100).toString() + '%'
  } catch (_err) {
    return '0%'
  }
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export const toPercentageString = (num: number): string => {
  try {
    return Math.min(parseFloat(num.toFixed()), 100).toString() + '%'
  } catch (_) {
    return '0%'
  }
}

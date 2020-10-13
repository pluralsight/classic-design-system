export const toPercentageString = num => {
  try {
    return `${Math.min(parseFloat(num), 100).toFixed()}%`
  } catch (_) {
    return '0%'
  }
}

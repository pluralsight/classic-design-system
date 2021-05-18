export const toPercentageString = (num = 0) => {
  try {
    return `${Math.min(num, 100).toFixed()}%`
  } catch (_) {
    return '0%'
  }
}

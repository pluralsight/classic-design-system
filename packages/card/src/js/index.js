export const toPercentageString = num => {
  try {
    return Math.min(parseFloat(num).toFixed(), 100) + '%'
  } catch (_) {
    return '0%'
  }
}

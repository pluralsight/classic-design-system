// based on https://github.com/jonschlinkert/dashify/blob/master/index.js
const dashify = (str, options) => {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string')
  }

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, m => (options && options.condense ? '-' : m))
    .toLowerCase()
}

module.exports = dashify

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

const selector = (tab, name, obj) => `${tab}${name} {
${rules(tab + '  ', obj)}
${tab}}`

const rules = (tab, obj) =>
  Object.keys(obj)
    .map(
      attr =>
        typeof obj[attr] === 'object'
          ? selector(tab, attr, obj[attr])
          : rule(tab, attr, obj)
    )
    .join('\n')

const rule = (tab, attr, obj) => `${tab}${dashify(attr)}: ${obj[attr]};`

const stylesheet = (obj = {}) =>
  Object.keys(obj)
    .map(name =>
      selector(
        '',
        name,
        typeof obj[name] === 'function' ? obj[name]({}) : obj[name]
      )
    )
    .join('\n')

module.exports = stylesheet

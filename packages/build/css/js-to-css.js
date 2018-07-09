const dashify = require('./dashify')

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

const val = x => (x === ' ' ? "' '" : x)

const rule = (tab, attr, obj) => `${tab}${dashify(attr)}: ${val(obj[attr])};`

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

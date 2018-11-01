const validateIsString = str => {
  if (typeof str !== 'string') throw new TypeError('Expected a string')
  return true
}

const stripWhitespace = str => {
  validateIsString(str)
  return str.replace(/\s/g, '')
}

const smush = str => {
  validateIsString(str)
  return stripWhitespace(str.toLowerCase())
}

const pascalize = str => {
  validateIsString(str)
  return stripWhitespace(titleize(str))
}

const titleize = str => {
  validateIsString(str)
  return str.toLowerCase().replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
}

module.exports = {
  stripWhitespace,
  smush,
  pascalize,
  titleize,
  validateIsString
}

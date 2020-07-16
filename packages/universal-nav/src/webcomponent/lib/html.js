/**
 * @description
 * Tagged template function for making strings of html.
 * Good for either server side rendering or inside web components
 * in conjunction with or without tpl function
 * @param {string} literalSections
 * @param {expression}
 * @return {string}
 */
const reduceWhitespace = str => str.replace(/(\s\s+|\n)/g, ' ')
export const html = (literalSections, ...substs) => {
  /**
   * @constant
   * @type {{raw:[...string]}}
   */
  const { raw } = literalSections
  const result = substs.reduce((acc, cur, i) => {
    acc.push(reduceWhitespace(raw[i]))
    const string = Array.isArray(cur) ? cur.filter(Boolean).join('') : cur
    acc.push(string)
    return acc
  }, [])
  result.push(reduceWhitespace(raw[raw.length - 1]))
  return result
    .filter(val => val !== undefined)
    .join('')
    .trim()
    .replace(/\s>/g, '>')
    .replace(/>\s</g, '><')
    .replace(/(>)(\s)(\S)/g, (match, p1, p2, p3) => [p1, p3].join(''))
    .replace(/(\S)(\s)(<)/g, (match, p1, p2, p3) => [p1, p3].join(''))
  // .replace(/[\t\r\n]+/g, ' ')
}

type PrimitiveValueOptions = {
  [key: string]: boolean
}
const primitiveValues: PrimitiveValueOptions = {
  string: true,
  boolean: true,
  number: true
}
const trueTypeOf = (obj?: unknown) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

type CssArgs = Array<number | string | boolean | undefined | null | void>

const reduceWhitespace = (str: string) => str.replace(/^(\s\s+|\n)/gm, '')
const isPrimitive = (val: unknown) => primitiveValues[trueTypeOf(val)] || false
export const css = (
  literalSections: TemplateStringsArray,
  ...substs: CssArgs
) => {
  const { raw } = literalSections
  const result = substs.reduce<CssArgs>((acc, cur, i) => {
    acc.push(reduceWhitespace(raw[i]))
    const string = Array.isArray(cur)
      ? cur.filter(isPrimitive).join('')
      : isPrimitive(cur)
      ? cur
      : ''
    acc.push(string)
    return acc
  }, [])
  result.push(reduceWhitespace(raw[raw.length - 1]))
  return result.filter(Boolean).join('').trim()
}

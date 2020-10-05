export function omit<
  T extends Record<string, unknown>,
  K extends [...(keyof T)[]]
>(obj: T, fields: K): Record<string, unknown> {
  const clone = Object.assign({}, obj)
  for (let i = 0; i < fields.length; i += 1) delete clone[fields[i]]
  return clone
}

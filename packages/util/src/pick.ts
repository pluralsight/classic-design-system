export function pick<
  T extends Record<string, unknown>,
  K extends [...(keyof T)[]]
>(obj: T, fields: K): Record<string, unknown> {
  return fields.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

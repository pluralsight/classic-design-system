export function isFunction(val: unknown): val is (...args: unknown[]) => unknown {
  return typeof val === 'function'
}

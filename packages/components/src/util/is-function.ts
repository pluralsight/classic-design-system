export const isFunction = <Params extends unknown[], R>(
  val: unknown
): val is Fn<Params, R> => {
  return typeof val === 'function'
}

interface Fn<P extends unknown[], R = unknown> {
  (...args: P): R
}

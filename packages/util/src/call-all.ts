/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description calls each function passed to it with the provided arguments
 * @param {...*} args - arguments to be called with each function
 */
export const callAll = <Params extends any[]>(
  ...fns: Callback<Params>[] | undefined
) => (...args: Params) => {
  return fns.forEach(fn => fn && fn(...args))
}

interface Callback<Params extends any[]> {
  (...args: Params): void
}

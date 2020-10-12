/**  * @description calls each function passed to it with the provided arguments */
export const callAll = (
  ...fns /** @param {...*} args - arguments to be called with each function */
) => (...args) => fns.forEach(fn => fn && fn(...args))

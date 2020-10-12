/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction } from '.'

export const combineFns = <Params extends any[]>(
  ...fns: Callback<Params>[] | undefined
) => (...args: Params) => {
  return fns.filter(isFunction).forEach(fn => fn(...args))
}

interface Callback<Params extends any[]> {
  (...args: Params): void
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction } from './is-function'

export const combineFns =
  <Params extends any[]>(...fns: (Callback<Params> | undefined)[]) =>
  (...args: Params) => {
    return fns.filter(isFunction).forEach(fn => {
      if (fn) fn(...args)
    })
  }

interface Callback<Params extends any[]> {
  (...args: Params): void
}

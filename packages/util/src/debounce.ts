/* eslint-disable @typescript-eslint/no-explicit-any */

export type SideEffectFn = (...args: any[]) => void

export function debounce<F extends SideEffectFn>(delay: number, fn: F): F {
  let timerId: ReturnType<typeof setTimeout> | undefined

  return function (this: any, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this

    const doLater = function () {
      timerId = null

      fn.apply(context, args)
    }

    if (timerId !== undefined) clearTimeout(timerId)

    timerId = setTimeout(doLater, delay)
  } as F
}

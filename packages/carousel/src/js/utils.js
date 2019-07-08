export const chunk = (arr, size) =>
  arr.reduce((acc, item, index) => {
    if (index % size === 0) acc.push([item])
    else acc[acc.length - 1].push(item)

    return acc
  }, [])

export const combineFns = (...fns) => (...args) =>
  fns.filter(isFunction).forEach(fn => fn(...args))

export const isFunction = fn => typeof fn === 'function'

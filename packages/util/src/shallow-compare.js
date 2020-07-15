export function shallowCompare(prevObj = {}, nextObj = {}) {
  for (const key in nextObj) {
    if (prevObj[key] !== nextObj[key]) return true
  }

  return false
}

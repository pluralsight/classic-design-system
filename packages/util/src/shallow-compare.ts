export function shallowCompare(
  prevObj: Record<string, unknown> = {},
  nextObj: Record<string, unknown> = {}
) {
  for (const key in nextObj) {
    if (prevObj[key] !== nextObj[key]) return true
  }

  return false
}

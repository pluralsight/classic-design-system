export function dashify(str?: string) {
  if (!str) return

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([0-9]+)/g, '$1-$2')
    .replace(/([0-9])([a-z])/g, '$1-$2')
    .toLowerCase()
}

export function deprecationWarning(warning: string) {
  if (process.env.NODE_ENV === 'development') {
    return console.warn(`DEPRECATION WARNING: ${warning}`)
  }
}

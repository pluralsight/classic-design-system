export const capitalize = (str: unknown) =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str

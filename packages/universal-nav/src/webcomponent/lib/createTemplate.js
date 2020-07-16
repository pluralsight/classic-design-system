/** @param  {...string} strings */
export const createTemplate = (...strings) => {
  const template = document.createElement('template')
  template.innerHTML = strings.filter(Boolean).join('')
  return template
}

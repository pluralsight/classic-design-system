import util from '@pluralsight/ps-design-system-util'

const renderReactProps = permutation =>
  Object.keys(permutation).reduce((acc, key) => {
    if (/^example/.test(key)) return acc

    const exampleKey = 'example' + util.string.capitalize(key)
    acc += ` ${key}=${permutation[exampleKey] ? permutation[exampleKey] : `"${permutation[key]}"`}`
    return acc
  }, '')

const renderReactImport = name =>
  `import ${name} from '@pluralsight/ps-${name.toLowerCase()}/react'\n\n`

const renderReactSrc = (name, children, permutation) =>
  `<${name}${renderReactProps(permutation)}>${children || ''}</${name}>\n`

export default (name, children, permutations) =>
  permutations.reduce(
    (acc, p) => (acc += renderReactSrc(name, children, p)),
    renderReactImport(name)
  )

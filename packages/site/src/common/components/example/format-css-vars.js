const importStatement = '@import "@pluralsight/ps-design-system-core";'

const renderSelector = (acc, attribute) =>
  (acc += `.my-selector {
  ${attribute.attrName}: var(--${attribute.varName});
}
`)

export default attributes => `${importStatement}

${attributes.reduce(renderSelector, '')}
`

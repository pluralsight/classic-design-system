const babelTypes = require('@babel/types')

function template(api, _opts, values) {
  const { imports, interfaces, componentName, jsx, exports } = values
  const tmpl = api.template.smart({ plugins: ['jsx', 'typescript'] })

  const name = values.componentName.name.replace('Svg', '')
  const defaultTitle = babelTypes.stringLiteral(name)

  componentName.name = name + 'Illustration'
  exports.declaration.name = componentName.name

  return tmpl.ast`
    ${imports}
    ${interfaces}
    interface Props extends SVGRProps, React.HTMLAttributes<SVGElement> {}

    export const ${componentName} = (allProps: Props) => {
      const { title = '${defaultTitle}', titleId, ...props} = allProps
      return ${jsx}
    };
  `
}

module.exports = template

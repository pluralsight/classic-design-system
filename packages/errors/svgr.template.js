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
    import { Props } from './types'

    ${interfaces}

    const ${componentName} = (allProps: Props) => {
      const { title = '${defaultTitle}', ...props} = allProps
      return ${jsx}
    };

    ${exports}
  `
}

module.exports = template

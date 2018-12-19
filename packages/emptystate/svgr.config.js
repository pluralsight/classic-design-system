const babelTypes = require('@babel/types')

function template(api, opts, values) {
  const { imports, componentName, props, jsx, exports } = values

  const name = values.componentName.name.replace('Svg', '')
  const defaultTitle = babelTypes.stringLiteral(name)

  componentName.name = name + 'Illustration'

  exports.declaration.name = componentName.name

  return api.template.ast`
${imports}
import PropTypes from 'prop-types'

const ${componentName} = (${props}) => ${jsx}

${componentName}.defaultProps = {
  title: ${defaultTitle}
}

${componentName}.propTypes = {
  title: PropTypes.string
}

${exports}`
}

module.exports = {
  dimensions: false,
  icon: true,
  ref: false, // TODO: enabled when React.forwardRef is supported (16.3)
  replaceAttrValues: {
    '#FFF': 'currentColor'
  },
  svgProps: {
    'aria-hidden': true,
    role: 'img'
  },
  template,
  titleProp: true
}

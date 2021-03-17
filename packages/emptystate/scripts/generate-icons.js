import camelCase from 'camelcase'
import * as fs from 'fs'
import * as path from 'path'
import glob from 'glob'
import svgrModule from '@svgr/core'

const svgr = svgrModule.default

const ICONS_SOURCE_DIR = path.join('src', 'svg')
const DESTINATION_PATH = path.join('src', 'react', 'illustrations')

const iconComponentTemplate = (
  { template },
  opts,
  { imports, componentName, jsx }
) => {
  const PascalComponentName = camelCase(componentName.name, {
    pascalCase: true
  })
  return template.smart({ plugins: ['typescript'] }).ast`
     ${imports}
     ${'\n'}
     const ${PascalComponentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
     ${'\n'}
     export default ${PascalComponentName}
    `
}

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`)

for (const icon of icons) {
  const svg = fs.readFileSync(icon, 'utf8')
  const componentName = path.parse(icon).name
  const componentCode = svgr.sync(
    svg,
    {
      template: iconComponentTemplate,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier'
      ],
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }]
      }
      // Replace dimentions
      // svgProps: { height: 32, width: 32, viewBox: '0 0 32 32' }
    },
    { componentName }
  )
  fs.writeFileSync(
    `${DESTINATION_PATH}/${componentName}.dist.tsx`,
    componentCode
  )
}

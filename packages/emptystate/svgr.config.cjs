module.exports = {
  dimensions: false,
  icon: true,
  replaceAttrValues: {
    props: 'props: any',
    '#fff': 'currentColor',
    '#FFFFFF': 'currentColor',
    '#FFF': 'currentColor'
  },
  svgProps: {
    'aria-hidden': 'true',
    role: 'img'
  },
  template: require('./svgr.template.cjs'),
  titleProp: true
}

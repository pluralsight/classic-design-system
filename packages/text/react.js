// TODO: how can I avoid doing this .default bit?	 module.exports = require('./dist/react')

module.exports = {
  Code: require('./dist/cjs/react/code').default,
  Heading: require('./dist/cjs/react/heading').default,
  List: require('./dist/cjs/react/list').default,
  P: require('./dist/cjs/react/p').default
}

// TODO: how can I avoid doing this .default bit?	 module.exports = require('./dist/react')

module.exports = {
  Code: require('./dist/react/code').default,
  Heading: require('./dist/react/heading').default,
  List: require('./dist/react/list').default,
  P: require('./dist/react/p').default
}

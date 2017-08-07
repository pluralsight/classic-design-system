// TODO: how can I avoid doing this .default bit?
module.exports = {
  Heading: require('./dist/react/heading').default,
  List: require('./dist/react/list'),
  P: require('./dist/react/p').default
}

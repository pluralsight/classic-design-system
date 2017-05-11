module.exports = function renameJsxAttributesLoader(source) {
  return source.replace(/class=/g, 'className=')
}

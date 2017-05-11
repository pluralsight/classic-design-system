module.exports = function reactStyleableClassNameLoader(source) {
  return source.replace(
    /className="(\w+)"/g,
    "className={(props.css || {})['$1']}"
  )
}

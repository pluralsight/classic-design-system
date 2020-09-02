export function stylesFor(selectorKey, props) {
  return (
    (props &&
      props.UNSAFE_stylesFor &&
      selectorKey &&
      props.UNSAFE_stylesFor[selectorKey]) ||
    {}
  )
}

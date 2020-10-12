export function stylesFor(selectorKey: string, props: Props) {
  return (
    (props &&
      props.UNSAFE_stylesFor &&
      selectorKey &&
      props.UNSAFE_stylesFor[selectorKey]) ||
    {}
  )
}

interface Props {
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Record<string, unknown>
}

export function stylesFor(selectorKey: string, props: StylesForProps) {
  return (
    (props &&
      props.UNSAFE_stylesFor &&
      selectorKey &&
      props.UNSAFE_stylesFor[selectorKey]) ||
    {}
  )
}

export interface StylesForProps {
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Record<string, unknown>
}

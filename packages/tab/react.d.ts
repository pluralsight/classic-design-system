/// <reference types="react" />
declare const _default: {
  List: import('react').FC<import('react').HTMLAttributes<HTMLDivElement>>
  ListItem: import('react').ForwardRefExoticComponent<
    | import('./dist/esm/react/list-item').ListItemAnchorProps
    | import('./dist/esm/react/list-item').ListItemButtonProps
  > & {
    (
      props: import('./dist/esm/react/list-item').ListItemAnchorProps,
      ref?: import('@pluralsight/ps-design-system-util').RefFor<'a'> | undefined
    ): JSX.Element
    (
      props: import('./dist/esm/react/list-item').ListItemButtonProps,
      ref?:
        | import('@pluralsight/ps-design-system-util').RefFor<'button'>
        | undefined
    ): JSX.Element
  }
  Panel: import('react').FC<import('./dist/esm/react/panel').PanelProps>
}
export default _default

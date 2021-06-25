import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'

import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Context from './context'
import { Bar, Button } from './common'
import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  container: () => glamor.css(stylesheet['.psds-navitem__horz-container']),

  caret: () => glamor.css(stylesheet['.psds-navitem__horz-caret']),

  icon: (props: { hasLabel: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-navitem__horz-icon']),
      !props.hasLabel &&
        glamor.css(stylesheet['.psds-navitem__horz-icon--icon-only'])
    ),

  label: () => glamor.css(stylesheet['.psds-navitem__horz-label']),

  layout: (props: { menu?: unknown }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-navitem__horz-layout']),
      props.menu && glamor.css(stylesheet['.psds-navitem__horz-layout--menu'])
    )
}

export const HorzLayout: React.FC = props => {
  const { icon, menu } = React.useContext(Context)
  const hasLabel = !!props.children

  return (
    <HorzContainer>
      <Button>
        <span {...styles.layout({ menu })}>
          {icon && <HorzIcon hasLabel={hasLabel}>{icon}</HorzIcon>}
          {hasLabel && <HorzLabel>{props.children}</HorzLabel>}
          {menu && <HorzCaret />}
        </span>
      </Button>

      <Bar />
    </HorzContainer>
  )
}
HorzLayout.displayName = 'NavItem.HorzLayout'

const HorzContainer: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = props => {
  return <span {...styles.container()} {...props} />
}
HorzContainer.displayName = 'NavItem.HorzContainer'

const HorzCaret: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => {
  return (
    <span {...styles.caret()} {...props}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  )
}
HorzCaret.displayName = 'NavItem.HorzCaret'

const HorzIcon: React.FC<{ hasLabel: boolean }> = props => {
  const { hasLabel, ...rest } = props
  return <span {...styles.icon({ hasLabel })} {...rest} />
}
HorzIcon.displayName = 'NavItem.HorzIcon'

const HorzLabel: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => {
  return <span {...styles.label()} {...props} />
}
HorzLabel.displayName = 'NavItem.HorzLabel'

import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { useContext } from 'react'

import stylesheet from '../css'

import Context from './context'
import { Bar, Button } from './common'

const styles = {
  container: () => css(stylesheet['.psds-navitem__horz-container']),

  caret: () => css(stylesheet['.psds-navitem__horz-caret']),

  icon: (props: { hasLabel: boolean }) =>
    compose(
      css(stylesheet['.psds-navitem__horz-icon']),
      !props.hasLabel && css(stylesheet['.psds-navitem__horz-icon--icon-only'])
    ),

  label: () => css(stylesheet['.psds-navitem__horz-label']),

  layout: (props: { menu?: unknown }) =>
    compose(
      css(stylesheet['.psds-navitem__horz-layout']),
      props.menu && css(stylesheet['.psds-navitem__horz-layout--menu'])
    )
}

export const HorzLayout: React.FC = props => {
  const { icon, menu } = useContext(Context)
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

const HorzContainer: React.FC<HTMLPropsFor<'span'>> = props => {
  return <span {...styles.container()} {...props} />
}
HorzContainer.displayName = 'NavItem.HorzContainer'

const HorzCaret: React.FC<HTMLPropsFor<'span'>> = props => {
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

const HorzLabel: React.FC<HTMLPropsFor<'span'>> = props => {
  return <span {...styles.label()} {...props} />
}
HorzLabel.displayName = 'NavItem.HorzLabel'

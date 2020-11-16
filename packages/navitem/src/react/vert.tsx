import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { useContext } from 'react'

import stylesheet from '../css'

import Context from './context'
import { Bar, Button } from './common'

const styles = {
  container: () => css(stylesheet['.psds-navitem__vert-container']),
  caret: () => css(stylesheet['.psds-navitem__vert-caret']),
  icon: () => css(stylesheet['.psds-navitem__vert-icon']),
  label: () => css(stylesheet['.psds-navitem__vert-label']),
  layout: () => css(stylesheet['.psds-navitem__vert-layout'])
}

export const VertLayout: React.FC = props => {
  const { icon, menu } = useContext(Context)

  return (
    <VertContainer>
      <Button>
        <span {...styles.layout()}>
          {icon && <VertIcon>{icon}</VertIcon>}
          {props.children && <VertLabel>{props.children}</VertLabel>}
          {menu && <VertCaret />}
        </span>
      </Button>

      <Bar />
    </VertContainer>
  )
}
VertLayout.displayName = 'NavItem.VertLayout'

const VertContainer: React.FC<HTMLPropsFor<'span'>> = props => {
  return <span {...styles.container()} {...props} />
}
VertContainer.displayName = 'NavItem.VertContainer'

const VertCaret: React.FC<HTMLPropsFor<'span'>> = props => {
  return (
    <span {...styles.caret()} {...props}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  )
}
VertCaret.displayName = 'NavItem.VertCaret'

const VertIcon: React.FC = props => {
  return <span {...styles.icon()} {...props} />
}
VertIcon.displayName = 'NavItem.VertIcon'

const VertLabel: React.FC<HTMLPropsFor<'span'>> = props => {
  return <span {...styles.label()} {...props} />
}
VertLabel.displayName = 'NavItem.VertLabel'

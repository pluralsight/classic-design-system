import { CaretDownIcon } from '../../icon'
import { HTMLPropsFor } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Context from './context'
import { Bar, Button } from './common'
import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  container: () => glamor.css(stylesheet['.psds-navitem__vert-container']),
  caret: () => glamor.css(stylesheet['.psds-navitem__vert-caret']),
  icon: () => glamor.css(stylesheet['.psds-navitem__vert-icon']),
  label: () => glamor.css(stylesheet['.psds-navitem__vert-label']),
  layout: () => glamor.css(stylesheet['.psds-navitem__vert-layout'])
}

export const VertLayout: React.FC = props => {
  const { icon, menu } = React.useContext(Context)

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

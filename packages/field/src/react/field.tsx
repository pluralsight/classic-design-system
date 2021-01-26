import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import Theme, {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { ForwardRefExoticComponent, ReactNode, forwardRef } from 'react'

import { appearances } from '../vars'
import stylesheet from '../css/field'

import Input from './input'
import Label from './label'
import SubLabel from './sub-label'

const styles = {
  container: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-field__container']),
      css(stylesheet[`.psds-field__container.psds-theme--${themeName}`])
    ),
  field: () =>
    compose(
      css(stylesheet['.psds-field'])
      //
    )
}

interface FieldProps extends HTMLPropsFor<'div'> {
  label?: ReactNode
  subLabel?: ReactNode
  renderContainer?: typeof defaultRenderContainer
}

export interface FieldStatics {
  Input: typeof Input
  Label: typeof Label
  SubLabel: typeof SubLabel

  appearances: typeof appearances
}

type FieldComponent = ForwardRefExoticComponent<FieldProps> & FieldStatics

const Field = forwardRef<HTMLDivElement, FieldProps>((props, forwardRef) => {
  const {
    children,
    label,
    renderContainer = defaultRenderContainer,
    subLabel,
    ...rest
  } = props
  const themeName = useTheme()

  const containerRef = React.useRef<HTMLDivElement>(null)
  const Container = React.useMemo(() => renderContainer, [renderContainer])

  return (
    <Container {...styles.container(themeName)} ref={containerRef}>
      {label && label}

      <Theme name={themeNames.light}>
        <div {...styles.field()} ref={forwardRef} {...rest}>
          {children}
        </div>
      </Theme>

      {subLabel && subLabel}
    </Container>
  )
}) as FieldComponent

const defaultRenderContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} />
)

Field.displayName = 'Field'

Field.Input = Input
Field.Label = Label
Field.SubLabel = SubLabel

Field.appearances = appearances

export { appearances }
export default Field

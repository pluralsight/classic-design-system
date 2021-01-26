import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { ForwardRefExoticComponent, ReactNode, forwardRef } from 'react'

import stylesheet from '../css'
import { appearances } from '../vars'

const styles = {
  container: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-field__container']),
      css(stylesheet[`.psds-field__container.psds-theme--${themeName}`])
    ),
  field: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-field']),
      css(stylesheet[`.psds-field.psds-theme--${themeName}`])
    )
}

interface FieldProps extends HTMLPropsFor<'label'> {
  label?: ReactNode
  subLabel?: ReactNode
  renderContainer?: typeof defaultRenderContainer
}
export interface FieldStatics {
  Label: typeof Label
  SubLabel: typeof SubLabel
  appearances: typeof appearances
}

type FieldComponent = ForwardRefExoticComponent<FieldProps> & FieldStatics

const Field = forwardRef<HTMLLabelElement, FieldProps>((props, forwardRef) => {
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
      <label {...styles.field(themeName)} ref={forwardRef} {...rest}>
        {label && label}
        {children}
        {subLabel && subLabel}
      </label>
    </Container>
  )
}) as FieldComponent

const defaultRenderContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} />
)

Field.displayName = 'Field'

interface LabelProps extends HTMLPropsFor<'div'> {}
const Label = forwardRef<HTMLDivElement, LabelProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
})
Label.displayName = 'Field.Label'

interface SubLabelProps extends HTMLPropsFor<'div'> {}
const SubLabel = forwardRef<HTMLDivElement, SubLabelProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
})
SubLabel.displayName = 'Field.SubLabel'

Field.Label = Label
Field.SubLabel = SubLabel

Field.appearances = appearances

export { appearances }
export default Field

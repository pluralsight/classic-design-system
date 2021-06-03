import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { FieldContext } from './context'
import stylesheet from '../css/input'
import { sizes } from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  container: () => glamor.css(stylesheet['.psds-field__input__container']),
  input: (size: ValueOf<typeof sizes>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-field__input']),
      glamor.css(stylesheet[`.psds-field__input--${size}`])
    )
}

export interface FieldInputProps extends Omit<HTMLPropsFor<'input'>, 'ref'> {
  renderContainer?: typeof defaultRenderContainer
  renderTag?: typeof defaultRenderTag
}

const Input = React.forwardRef<HTMLInputElement, FieldInputProps>(
  (props, ref) => {
    const { size } = React.useContext(FieldContext)
    const {
      renderContainer = defaultRenderContainer,
      renderTag = defaultRenderTag,
      ...rest
    } = props

    const containerRef = React.useRef<HTMLDivElement>(null)
    const Container = React.useMemo(() => renderContainer, [renderContainer])

    const Tag = React.useMemo(() => renderTag, [renderTag])

    return (
      <Container {...styles.container()} ref={containerRef}>
        <Tag ref={ref} {...styles.input(size)} {...rest} />
      </Container>
    )
  }
)
Input.displayName = 'Field.Input'

const defaultRenderContainer = React.forwardRef<
  HTMLDivElement,
  HTMLPropsFor<'div'>
>((props, ref) => <div ref={ref} {...props} />)

const defaultRenderTag = React.forwardRef<
  HTMLInputElement,
  HTMLPropsFor<'input'>
>((props, ref) => <input ref={ref} {...props} />)

export default Input

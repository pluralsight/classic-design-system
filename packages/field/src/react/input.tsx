import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { forwardRef, useContext, useMemo } from 'react'

import { FieldContext } from './context'
import stylesheet from '../css/input'
import { sizes } from '../vars'

const styles = {
  container: () => css(stylesheet['.psds-field__input__container']),
  input: (size: ValueOf<typeof sizes>) =>
    compose(
      css(stylesheet['.psds-field__input']),
      css(stylesheet[`.psds-field__input--${size}`])
    )
}

interface InputProps extends Omit<HTMLPropsFor<'input'>, 'ref'> {
  renderContainer?: typeof defaultRenderContainer
  renderTag?: typeof defaultRenderTag
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size } = useContext(FieldContext)
  const {
    renderContainer = defaultRenderContainer,
    renderTag = defaultRenderTag,
    ...rest
  } = props

  const containerRef = React.useRef<HTMLDivElement>(null)
  const Container = useMemo(() => renderContainer, [renderContainer])

  const Tag = useMemo(() => renderTag, [renderTag])

  return (
    <Container {...styles.container()} ref={containerRef}>
      <Tag ref={ref} {...styles.input(size)} {...rest} />
    </Container>
  )
})
Input.displayName = 'Field.Input'

const defaultRenderContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} />
)

const defaultRenderTag = forwardRef<HTMLInputElement, HTMLPropsFor<'input'>>(
  (props, ref) => <input ref={ref} {...props} />
)

export default Input

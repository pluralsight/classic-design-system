import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { forwardRef, useMemo } from 'react'

import stylesheet from '../css/input'

const styles = {
  container: () => css(stylesheet['.psds-field__input__container']),
  input: () => css(stylesheet['.psds-field__input'])
}

interface InputProps extends Omit<HTMLPropsFor<'input'>, 'ref'> {
  renderContainer?: typeof defaultRenderContainer
  renderTag?: typeof defaultRenderTag
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
      <Tag ref={ref} {...styles.input()} {...rest} />
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

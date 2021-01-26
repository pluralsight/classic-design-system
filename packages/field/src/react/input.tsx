import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css/input'

const styles = {
  container: () => css(stylesheet['.psds-input__container']),
  input: () => css(stylesheet['.psds-input'])
}

interface InputProps extends HTMLPropsFor<'input'> {
  renderContainer?: typeof defaultRenderContainer
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { renderContainer = defaultRenderContainer, ...rest } = props

  const containerRef = React.useRef<HTMLDivElement>(null)
  const Container = React.useMemo(() => renderContainer, [renderContainer])

  return (
    <Container {...styles.container()} ref={containerRef}>
      <input ref={ref} {...styles.input()} {...rest} />
    </Container>
  )
})
Input.displayName = 'Field.Input'

// TODO: different types of Container styles
const defaultRenderContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} />
)

export default Input

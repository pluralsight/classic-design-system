import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css/text-area'

const styles = {
  container: () => css(stylesheet['.psds-text-area__container']),
  textArea: () => css(stylesheet['.psds-text-area'])
}

interface TextAreaProps extends HTMLPropsFor<'textarea'> {
  renderContainer?: typeof defaultRenderContainer
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { renderContainer = defaultRenderContainer, ...rest } = props

    const containerRef = React.useRef<HTMLDivElement>(null)
    const Container = React.useMemo(() => renderContainer, [renderContainer])

    return (
      <Container {...styles.container()} ref={containerRef}>
        <textarea ref={ref} {...styles.textArea()} {...rest} />
      </Container>
    )
  }
)
TextArea.displayName = 'Field.TextArea'

const defaultRenderContainer = forwardRef<HTMLDivElement, HTMLPropsFor<'div'>>(
  (props, ref) => <div ref={ref} {...props} />
)

export default TextArea

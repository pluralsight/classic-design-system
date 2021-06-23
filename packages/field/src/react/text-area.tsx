import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/text-area'

const glamor = glamorDefault || glamorExports

const styles = {
  container: () => glamor.css(stylesheet['.psds-field__text-area__container']),
  textArea: () => glamor.css(stylesheet['.psds-field__text-area'])
}

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  renderContainer?: typeof defaultRenderContainer
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
) as React.ForwardRefExoticComponent<TextAreaProps>
TextArea.displayName = 'Field.TextArea'

const defaultRenderContainer = React.forwardRef<
  HTMLDivElement,
  HTMLPropsFor<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props} />)

export default TextArea

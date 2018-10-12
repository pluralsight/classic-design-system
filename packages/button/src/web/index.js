import React from 'react'
import { register } from 'web-react-components'
import Button from '../react'
import Icon from '@pluralsight/ps-design-system-icon/react'

export default register(
  Button,
  'ps-button',
  [
    'appearance',
    '!!disabled',
    'icon',
    'iconAlign',
    '!!iconOnly',
    '!!loading',
    'onClick()',
    'size'
  ],
  {},
  { useShadowDOM: true, inheritStyles: true }
)

export function createButtonWithIcon(selector, icon) {
  class ButtonWithIcon extends React.Component {
    render() {
      const { props } = this
      return <Button icon={<Icon id={icon} />} {...props} />
    }
  }

  return register(
    ButtonWithIcon,
    selector,
    [
      'appearance',
      '!!disabled',
      'iconAlign',
      '!!iconOnly',
      '!!loading',
      'onClick()',
      'size'
    ],
    {},
    { useShadowDOM: true, inheritStyles: true }
  )
}

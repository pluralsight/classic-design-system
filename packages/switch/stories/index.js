import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Switch from '../react'

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Switch.sizes).forEach(size =>
  sizeStory.add(size, _ => <Switch size={size}>Click me</Switch>)
)

const checkedStory = storiesOf('checked', module)
  .addDecorator(themeDecorator(addons))
  .add('false', _ => <Switch>Click me</Switch>)
  .add('true', _ => <Switch checked>Click me</Switch>)

class ClickDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(checked) {
    this.setState({ checked })
  }
  render() {
    return React.cloneElement(this.props.children, {
      onClick: this.handleClick,
      checked: this.state.checked
    })
  }
}

const colorStory = storiesOf('color', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Switch.colors).forEach(color =>
  colorStory.add(color, _ => (
    <Switch color={color} checked>
      Click me
    </Switch>
  ))
)

const clickStory = storiesOf('click', module)
  .addDecorator(themeDecorator(addons))
  .add('toggles on click', _ => (
    <ClickDemo>
      <Switch />
    </ClickDemo>
  ))

const labelStory = storiesOf('label', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Switch.sizes).forEach(size =>
  Object.keys(Switch.labelAligns).forEach(labelAlign =>
    labelStory.add(`${size} ${labelAlign}`, _ => (
      <Switch size={size} labelAlign={labelAlign}>
        Click me
      </Switch>
    ))
  )
)

const disabledStory = storiesOf('disabled', module)
  .addDecorator(themeDecorator(addons))
  .add('false', _ => (
    <ClickDemo>
      <Switch />
    </ClickDemo>
  ))
  .add('true', _ => (
    <ClickDemo>
      <Switch disabled />
    </ClickDemo>
  ))

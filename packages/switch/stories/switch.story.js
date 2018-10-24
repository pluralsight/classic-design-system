import PropType from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from '../react'

const sizeStory = storiesOf('size', module)
Object.keys(Switch.sizes).forEach(size =>
  sizeStory.add(size, _ => <Switch size={size}>Click me</Switch>)
)

const checkedStory = storiesOf('checked', module)
  .add('false', _ => <Switch>Click me</Switch>)
  .add('true', _ => <Switch checked>Click me</Switch>)

class ClickDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { checked: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (checked) {
    this.setState({ checked })
  }
  render () {
    return React.cloneElement(this.props.children, {
      onClick: this.handleClick,
      checked: this.state.checked
    })
  }
}
ClickDemo.propTypes = { children: PropType.node }

const colorStory = storiesOf('color', module)
Object.keys(Switch.colors).forEach(color =>
  colorStory.add(color, _ => (
    <Switch color={color} checked>
      Click me
    </Switch>
  ))
)

const clickStory = storiesOf('click', module)
  .add('large toggles', _ => (
    <ClickDemo>
      <Switch />
    </ClickDemo>
  ))
  .add('small toggles', _ => (
    <ClickDemo>
      <Switch size={Switch.sizes.small} />
    </ClickDemo>
  ))

const labelStory = storiesOf('label', module)
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

const errorStory = storiesOf('error', module)
  .add('false', _ => (
    <ClickDemo>
      <Switch />
    </ClickDemo>
  ))
  .add('true', _ => (
    <ClickDemo>
      <Switch error>Clickable in error state</Switch>
    </ClickDemo>
  ))
  .add('true w/ disabled', _ => (
    <ClickDemo>
      <Switch error disabled>
        Such errors
      </Switch>
    </ClickDemo>
  ))

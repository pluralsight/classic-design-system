import PropType from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from '..'

const sizeStory = storiesOf('size', module)
Object.keys(Switch.sizes).forEach(size =>
  sizeStory.add(size, _ => <Switch size={size}>Click me</Switch>)
)

storiesOf('checked', module)
  .add('false', _ => <Switch>Click me</Switch>)
  .add('true', _ => <Switch checked>Click me</Switch>)

const colorStory = storiesOf('color', module)
Object.keys(Switch.colors).forEach(color =>
  colorStory.add(color, _ => (
    <Switch color={color} checked>
      Click me
    </Switch>
  ))
)

storiesOf('click', module)
  .add('large toggles', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('small toggles', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch
          size={Switch.sizes.small}
          checked={checked}
          onClick={handleCheck}
        />
      )}
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

storiesOf('disabled', module)
  .add('false', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch disabled={false} checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('true', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch disabled checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))

storiesOf('error', module)
  .add('false', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch error={false} checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('true', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch error checked={checked} onClick={handleCheck}>
          Clickable in error state
        </Switch>
      )}
    </ClickDemo>
  ))
  .add('true w/ disabled', _ => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch error disabled checked={checked} onClick={handleCheck}>
          Such errors
        </Switch>
      )}
    </ClickDemo>
  ))

function ClickDemo(props) {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = nextChecked => setChecked(nextChecked)

  return props.children({ checked, handleCheck })
}

ClickDemo.propTypes = { children: PropType.func }

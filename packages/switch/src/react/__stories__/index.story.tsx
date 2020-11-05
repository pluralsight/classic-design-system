import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from '..'

const sizeStory = storiesOf('size', module)
Object.values(Switch.sizes).forEach(size =>
  sizeStory.add(size, () => <Switch size={size}>Click me</Switch>)
)

storiesOf('checked', module)
  .add('false', () => <Switch>Click me</Switch>)
  .add('true', () => <Switch checked>Click me</Switch>)

const colorStory = storiesOf('color', module)
Object.values(Switch.colors).forEach(color =>
  colorStory.add(color, () => (
    <Switch color={color} checked>
      Click me
    </Switch>
  ))
)

storiesOf('click', module)
  .add('large toggles', () => (
    <ClickDemo>
      {({ checked, handleCheck }) => (
        <Switch checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('small toggles', () => (
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
Object.values(Switch.sizes).forEach(size =>
  Object.values(Switch.labelAligns).forEach(labelAlign =>
    labelStory.add(`${size} ${labelAlign}`, () => (
      <Switch size={size} labelAlign={labelAlign}>
        Click me
      </Switch>
    ))
  )
)

type RenderProp = { checked: boolean, handleCheck: (nextChecked: boolean) => void }

storiesOf('disabled', module)
  .add('false', () => (
    <ClickDemo>
      {({ checked, handleCheck }: RenderProp) => (
        <Switch disabled={false} checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('true', () => (
    <ClickDemo>
      {({ checked, handleCheck }: RenderProp) => (
        <Switch disabled checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))

storiesOf('error', module)
  .add('false', () => (
    <ClickDemo>
      {({ checked, handleCheck }: RenderProp) => (
        <Switch error={false} checked={checked} onClick={handleCheck} />
      )}
    </ClickDemo>
  ))
  .add('true', () => (
    <ClickDemo>
      {({ checked, handleCheck }: RenderProp) => (
        <Switch error checked={checked} onClick={handleCheck}>
          Clickable in error state
        </Switch>
      )}
    </ClickDemo>
  ))
  .add('true w/ disabled', () => (
    <ClickDemo>
      {({ checked, handleCheck }: RenderProp) => (
        <Switch error disabled checked={checked} onClick={handleCheck}>
          Such errors
        </Switch>
      )}
    </ClickDemo>
  ))

function ClickDemo({ children }: { children: (obj: RenderProp) => React.ReactElement}) {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = (nextChecked: boolean) => setChecked(nextChecked)

  return children({ checked, handleCheck })
}

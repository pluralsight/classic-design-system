import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import TextInput from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

const labelStory = storiesOf('labels', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('none', _ => <TextInput />)
  .add('placeholder', _ => <TextInput placeholder="some placeholder" />)
  .add('label', _ => <TextInput label="Some label" />)
  .add('subLabel', _ => <TextInput subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <TextInput label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', _ => (
    <TextInput
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))
  .add('all w/error', _ => (
    <TextInput
      error
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearanceStory = storiesOf('appearance', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
Object.keys(TextInput.appearances).forEach(appearance =>
  Object.keys(TextInput.iconAligns).forEach(iconAlign =>
    appearanceStory.add(`${appearance} w/ iconAlign ${iconAlign}`, _ => (
      <TextInput
        appearance={appearance}
        iconAlign={iconAlign}
        icon={<Icon id={Icon.ids.info} />}
        placeholder="The placeholder "
      />
    ))
  )
)
Object.keys(TextInput.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, _ => (
    <TextInput appearance={appearance} error label="Problem field" />
  ))
)

const disabledStory = storiesOf('disabled', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('compare', _ => (
    <div>
      <TextInput
        label="Normal"
        subLabel="Still normal"
        placeholder="I'm normal, see"
      />
      <TextInput
        label="I'm not usable"
        subLabel="Neither am I"
        disabled
        placeholder="I'm untouchable"
      />
    </div>
  ))

const whitelistStory = storiesOf('whitelist', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('title', _ => <TextInput title="some title" />)
  .add('type=password', _ => (
    <TextInput placeholder="Password" type="password" />
  ))
  .add('type=date', _ => <TextInput placeholder="Date" type="date" />)
  .add('name', _ => (
    <TextInput placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', _ => (
    <TextInput placeholder="Change me" onChange={action('I changed')} />
  ))

const layoutsStory = storiesOf('layouts', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <TextInput label="First" style={{ display: 'block', width: '100%' }} />
      <TextInput
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
      />
      <TextInput
        appearance={TextInput.appearances.subtle}
        label="Third"
        style={{ display: 'block', width: '100%' }}
      />
      <TextInput
        appearance={TextInput.appearances.subtle}
        error
        label="Fourth"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  ))
  .add('right-aligned', _ => (
    <div style={{ border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextInput
          placeholder="Search"
          icon={<Icon id={Icon.ids.search} />}
          appearance={TextInput.appearances.subtle}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))

const styleStory = storiesOf('style override', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('css', _ => (
    <div>
      <div>
        <TextInput css={{ '& input': { minWidth: 0, width: '51px' } }} />
      </div>
      <div>
        <TextInput error css={{ '& input': { minWidth: 0, width: '51px' } }} />
      </div>
    </div>
  ))

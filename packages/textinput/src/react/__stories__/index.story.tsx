import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'

import TextInput from '..'

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

storiesOf('labels', module)
  .addDecorator(PaddingDecorator)
  .add('none', () => <TextInput />)
  .add('placeholder', () => <TextInput placeholder="some placeholder" />)
  .add('long placeholder', () => (
    <TextInput
      placeholder="some placeholder that goes on forever when the little things can't handle it"
      style={{ width: '100%' }}
    />
  ))
  .add('label', () => <TextInput label="Some label" />)
  .add('subLabel', () => <TextInput subLabel="Some sublabel" />)
  .add('label and subLabel', () => (
    <TextInput label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', () => (
    <TextInput
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))
  .add('all w/error', () => (
    <TextInput
      error
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearanceStory = storiesOf('appearance', module)
  .addDecorator(PaddingDecorator)
  .add(`small`, () => (
    <TextInput size={TextInput.sizes.small} placeholder="small input" />
  ))

Object.values(TextInput.appearances).forEach(appearance =>
  Object.values(TextInput.sizes).forEach(size =>
    Object.values(TextInput.iconAligns).forEach(iconAlign =>
      appearanceStory.add(
        `${appearance} ${size} w/ iconAlign ${iconAlign}`,
        () => (
          <TextInput
            size={size}
            appearance={appearance}
            iconAlign={iconAlign}
            icon={<Icon.InfoIcon />}
            placeholder="The placeholder "
          />
        )
      )
    )
  )
)
Object.values(TextInput.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, () => (
    <TextInput appearance={appearance} error label="Problem field" />
  ))
)

storiesOf('after field', module)
  .addDecorator(PaddingDecorator)
  .add('w/icon', () => (
    <TextInput fieldAfter={<Icon.CloseIcon />} placeholder="Some placeholder" />
  ))

storiesOf('disabled', module)
  .addDecorator(PaddingDecorator)
  .add('compare', () => (
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
      <TextInput
        label="Disbled and errored"
        subLabel="Neither am I"
        disabled
        error
        placeholder="I'm untouchable"
      />
    </div>
  ))

storiesOf('whitelist', module)
  .addDecorator(PaddingDecorator)
  .add('title', () => <TextInput title="some title" />)
  .add('type=password', () => (
    <TextInput placeholder="Password" type="password" />
  ))
  .add('type=date', () => <TextInput placeholder="Date" type="date" />)
  .add('name', () => (
    <TextInput placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', () => (
    <TextInput placeholder="Change me" onChange={action('I changed')} />
  ))
  .add('className', () => <TextInput className="shouldExistOnOneElement" />)

storiesOf('layouts', module)
  .addDecorator(PaddingDecorator)
  .add('full width', () => (
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
  .add('right-aligned', () => (
    <div style={{ border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextInput
          placeholder="Search"
          icon={<Icon.SearchIcon />}
          appearance={TextInput.appearances.subtle}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))

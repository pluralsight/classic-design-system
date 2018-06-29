import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import DatePicker from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

const labelStory = storiesOf('labels', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('none', _ => <DatePicker />)
//   .add('compare w/ textinput', _ => (
//     <div>
//       <div style={{ marginBottom: core.layout.spacingSmall }}>
//         <DatePicker />
//       </div>
//       <div>
//         <TextInput type="date" />
//       </div>
//     </div>
//   ))
//   .add('label', _ => <DatePicker label="Some label" />)
//   .add('subLabel', _ => <DatePicker subLabel="Some sublabel" />)
//   .add('label and subLabel', _ => (
//     <DatePicker label="Some label" subLabel="Some sublabel" />
//   ))

const valueStory = storiesOf('value', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('single slash-separated value', _ => <DatePicker value="12/07/1941" />)

// const appearanceStory = storiesOf('appearance', module)
//   .addDecorator(PaddingDecorator)
//   .addDecorator(themeDecorator(addons))
// Object.keys(DatePicker.appearances).forEach(appearance =>
//   appearanceStory.add(appearance, _ => (
//     <DatePicker appearance={appearance} placeholder="The placeholder" />
//   ))
// )
// Object.keys(DatePicker.appearances).forEach(appearance =>
//   appearanceStory.add(`${appearance} w/ error`, _ => (
//     <DatePicker appearance={appearance} error label="Problem field" />
//   ))
// )

// const disabledStory = storiesOf('disabled', module)
//   .addDecorator(PaddingDecorator)
//   .addDecorator(themeDecorator(addons))
//   .add('compare', _ => (
//     <div>
//       <DatePicker
//         label="Normal"
//         subLabel="Still normal"
//         placeholder="I'm normal, see"
//       />
//       <DatePicker
//         label="I'm not usable"
//         subLabel="Neither am I"
//         disabled
//         placeholder="I'm untouchable"
//       />
//     </div>
//   ))

// const whitelistStory = storiesOf('whitelist', module)
//   .addDecorator(PaddingDecorator)
//   .addDecorator(themeDecorator(addons))
//   .add('name', _ => (
//     <DatePicker placeholder="I have a form name" name="myFieldNameOfPower" />
//   ))
//   .add('onChange', _ => (
//     <DatePicker placeholder="Change me" onChange={action('I changed')} />
//   ))

// const layoutsStory = storiesOf('layouts', module)
//   .addDecorator(PaddingDecorator)
//   .addDecorator(themeDecorator(addons))
//   .add('full width', _ => (
//     <div style={{ border: '1px solid blue', width: '500px' }}>
//       <DatePicker label="First" style={{ display: 'block', width: '100%' }} />
//       <DatePicker
//         error
//         label="Second"
//         style={{ display: 'block', width: '100%' }}
//       />
//       <DatePicker
//         appearance={DatePicker.appearances.subtle}
//         label="Third"
//         style={{ display: 'block', width: '100%' }}
//       />
//       <DatePicker
//         appearance={DatePicker.appearances.subtle}
//         error
//         label="Fourth"
//         style={{ display: 'block', width: '100%' }}
//       />
//     </div>
//   ))
//   .add('right-aligned', _ => (
//     <div style={{ border: '1px solid blue' }}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <DatePicker
//           placeholder="Search"
//           icon={<Icon id={Icon.ids.search} />}
//           appearance={DatePicker.appearances.subtle}
//         />
//       </div>
//       <div style={{ border: '3px solid green', height: '50px' }} />
//     </div>
//   ))

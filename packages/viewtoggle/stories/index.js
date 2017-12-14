import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import React from 'react'
import ReactDOM from 'react-dom'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import ViewToggle from '../react'

storiesOf('options count', module)
  .addDecorator(themeDecorator(addons))
  .add('one', _ => (
    <ViewToggle>
      <ViewToggle.Option>The Only Option</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('two', _ => (
    <ViewToggle>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('three', _ => (
    <ViewToggle>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('more than max', _ => (
    <ViewToggle>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
      <ViewToggle.Option>Should not show up</ViewToggle.Option>
      <ViewToggle.Option>Should not show up</ViewToggle.Option>
      <ViewToggle.Option>Should not show up</ViewToggle.Option>
    </ViewToggle>
  ))

storiesOf('active', module)
  .addDecorator(themeDecorator(addons))
  .add('default first', _ => (
    <ViewToggle>
      <ViewToggle.Option>I'm active</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('explicit first', _ => (
    <ViewToggle>
      <ViewToggle.Option active>I'm active</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('explicit second', _ => (
    <ViewToggle>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option active>I'm active</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('explicit third', _ => (
    <ViewToggle>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option active>I'm active</ViewToggle.Option>
    </ViewToggle>
  ))

storiesOf('onSelect', module)
  .addDecorator(themeDecorator(addons))
  .add('handles click', _ => (
    <ViewToggle onSelect={action('selected')}>
      <ViewToggle.Option>Option 1</ViewToggle.Option>
      <ViewToggle.Option>Option 2</ViewToggle.Option>
      <ViewToggle.Option>Option 3</ViewToggle.Option>
    </ViewToggle>
  ))

storiesOf('text length', module)
  .addDecorator(themeDecorator(addons))
  .add('differing lengths', _ => (
    <ViewToggle>
      <ViewToggle.Option>
        This one is really long because everyone likes those
      </ViewToggle.Option>
      <ViewToggle.Option>This is medium</ViewToggle.Option>
      <ViewToggle.Option>Short</ViewToggle.Option>
    </ViewToggle>
  ))
  .add('all long', _ => (
    <ViewToggle>
      <ViewToggle.Option>
        This one is really long because everyone likes those
      </ViewToggle.Option>
      <ViewToggle.Option>
        This one is really long because everyone likes those
      </ViewToggle.Option>
      <ViewToggle.Option>
        This one is really long because everyone likes those
      </ViewToggle.Option>
    </ViewToggle>
  ))

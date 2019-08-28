import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { css } from 'glamor'
import React, { Fragment } from 'react'

import ViewToggle from '../index.js'

storiesOf('options count', module)
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
  .add('dynamic', _ => {
    function DynamicOptions() {
      const [count, updateCount] = React.useState(2)

      const add = () => updateCount(count + 1)
      const remove = () => updateCount(count - 1)

      return (
        <Fragment>
          <ViewToggle>
            {new Array(count).fill(null).map((_, index) => (
              <ViewToggle.Option key={index}>
                item: {index + 1}
              </ViewToggle.Option>
            ))}
          </ViewToggle>

          <div
            {...css({
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              margin: '10px auto'
            })}
          >
            <button disabled={count <= 1} onClick={remove}>
              remove
            </button>

            <button disabled={count >= 3} onClick={add}>
              add
            </button>
          </div>
        </Fragment>
      )
    }

    return <DynamicOptions />
  })

storiesOf('active', module)
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

storiesOf('onSelect', module).add('handles click', _ => (
  <ViewToggle onSelect={action('selected')}>
    <ViewToggle.Option>Option 1</ViewToggle.Option>
    <ViewToggle.Option>Option 2</ViewToggle.Option>
    <ViewToggle.Option>Option 3</ViewToggle.Option>
  </ViewToggle>
))

storiesOf('text length', module)
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

storiesOf('dynamic options', module).add('sizes correctly', _ => {
  const options = ['Apple', 'Banana', 'Orange']
  return (
    <ViewToggle>
      {options.map(option => {
        const active = option === 'Orange'
        return (
          <ViewToggle.Option key={option} active={active}>
            {option}
          </ViewToggle.Option>
        )
      })}
    </ViewToggle>
  )
})

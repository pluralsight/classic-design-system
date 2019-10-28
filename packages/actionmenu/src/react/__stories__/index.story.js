import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'

import ActionMenu from '../index.js'

storiesOf('menu items', module)
  .add('one', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('multiple', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('lots', _ => (
    <ActionMenu>
      {new Array(30).fill(null).map((_, index) => (
        <ActionMenu.Item key={index}>index: {index}</ActionMenu.Item>
      ))}
    </ActionMenu>
  ))
  .add('with icons', _ => (
    <ActionMenu>
      <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item icon={<Icon id={Icon.ids.path} />}>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item icon={<Icon id={Icon.ids.report} />}>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('long text', _ => (
    <ActionMenu>
      <ActionMenu.Item>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
      <ActionMenu.Item>
        Another item that takes a long time to explain in the context of
        everything that is in a line.
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('long text with icon', _ => (
    <ActionMenu>
      <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('null item', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      {null}
      <ActionMenu.Item>Skip to three item</ActionMenu.Item>
    </ActionMenu>
  ))

storiesOf('dividers', module)
  .add('edge', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Divider />
    </ActionMenu>
  ))
  .add('sandwich', _ => (
    <ActionMenu>
      <ActionMenu.Item>One item</ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>Two item</ActionMenu.Item>
      <ActionMenu.Item>Three item</ActionMenu.Item>
    </ActionMenu>
  ))

storiesOf('shouldFocusOnMount', module).add('false', _ => (
  <ActionMenu shouldFocusOnMount={false}>
    <ActionMenu.Item>One item</ActionMenu.Item>
    <ActionMenu.Item>Two item</ActionMenu.Item>
    <ActionMenu.Item>Three item</ActionMenu.Item>
  </ActionMenu>
))

const calcContainerStyle = origin => ({
  position: 'absolute',
  ...{
    topLeft: {
      left: 20,
      top: 20
    },
    topRight: {
      right: 20,
      top: 20
    },
    bottomRight: {
      bottom: 20,
      right: 20
    },
    bottomLeft: {
      left: 20,
      bottom: 20
    }
  }[origin]
})

const nestedStory = storiesOf('nested', module)
Object.keys(ActionMenu.origins).forEach(origin =>
  nestedStory.add(`origin ${origin}`, _ => (
    <div style={calcContainerStyle(origin)}>
      <ActionMenu origin={origin}>
        <ActionMenu.Item
          nested={
            <ActionMenu origin={origin}>
              <ActionMenu.Item>Nest 1</ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu origin={origin}>
                    <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Nest 2
              </ActionMenu.Item>
              <ActionMenu.Divider />
              <ActionMenu.Item>Nest 3</ActionMenu.Item>
              <ActionMenu.Item
                nested={
                  <ActionMenu origin={origin}>
                    <ActionMenu.Item>Nest nest 2-1</ActionMenu.Item>
                    <ActionMenu.Item>Nest nest 2-2</ActionMenu.Item>
                  </ActionMenu>
                }
              >
                Nest 4
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          One
        </ActionMenu.Item>
        <ActionMenu.Item>Two</ActionMenu.Item>
      </ActionMenu>
    </div>
  ))
)

storiesOf('onClick', module)
  .add('flat', _ => (
    <ActionMenu>
      <ActionMenu.Item onClick={action('one')}>One item</ActionMenu.Item>
      <ActionMenu.Item onClick={action('two')}>Two item</ActionMenu.Item>
      <ActionMenu.Item onClick={action('three')}>Three item</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('nested', _ => (
    <ActionMenu>
      <ActionMenu.Item onClick={action('-0')}>0</ActionMenu.Item>
      <ActionMenu.Item
        onClick={action('-1')}
        nested={
          <ActionMenu>
            <ActionMenu.Item onClick={action('-1-1')}>1-1</ActionMenu.Item>
            <ActionMenu.Item
              onClick={action('-1-2')}
              nested={
                <ActionMenu>
                  <ActionMenu.Item onClick={action('-1-2-1')}>
                    1-2-1
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-2-2')}>
                    1-2-2
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-2-3')}>
                    1-2-3
                  </ActionMenu.Item>
                </ActionMenu>
              }
            >
              1-2
            </ActionMenu.Item>
            <ActionMenu.Divider />
            <ActionMenu.Item onClick={action('-1-3')}>1-3</ActionMenu.Item>
            <ActionMenu.Item
              onClick={action('-1-4')}
              nested={
                <ActionMenu>
                  <ActionMenu.Item onClick={action('-1-4-1')}>
                    1-4-1
                  </ActionMenu.Item>
                  <ActionMenu.Item onClick={action('-1-4-2')}>
                    1-4-2
                  </ActionMenu.Item>
                </ActionMenu>
              }
            >
              1-4
            </ActionMenu.Item>
          </ActionMenu>
        }
      >
        1
      </ActionMenu.Item>
      <ActionMenu.Item onClick={action('-2')}>2</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-3')}>3</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-4')}>4</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-5')}>5</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-6')}>6</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-7')}>7</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-8')}>8</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-9')}>9</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-10')}>10</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-11')}>11</ActionMenu.Item>
      <ActionMenu.Item onClick={action('-12')}>12</ActionMenu.Item>
    </ActionMenu>
  ))

storiesOf('customized styles', module).add('item style', _ => (
  <ActionMenu>
    <ActionMenu.Item style={{ outline: '1px solid red' }}>
      One item
    </ActionMenu.Item>
    <ActionMenu.Item style={{ outline: '1px solid blue' }}>
      Two item
    </ActionMenu.Item>
    <ActionMenu.Item style={{ outline: '1px solid green' }}>
      Three item
    </ActionMenu.Item>
  </ActionMenu>
))

storiesOf('link', module).add('a w/ href', _ => (
  <ActionMenu>
    <ActionMenu.Item href="https://duckduckgo.com">
      Links to web
    </ActionMenu.Item>
  </ActionMenu>
))

storiesOf('disabled', module)
  .add('single, disabled', _ => (
    <ActionMenu>
      <ActionMenu.Item disabled>Single, disabled</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('multiple, all disabled', _ => (
    <ActionMenu>
      <ActionMenu.Item disabled>Mult 1, disabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Mult 2, disabled</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('item', _ => (
    <ActionMenu>
      <ActionMenu.Item>Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
      <ActionMenu.Item>Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled>Disabled</ActionMenu.Item>
    </ActionMenu>
  ))
  .add('links', _ => (
    <ActionMenu>
      <ActionMenu.Item href="https://duck.com">Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled href="https://duck.com">
        Disabled
      </ActionMenu.Item>
      <ActionMenu.Item href="https://duck.com">Enabled</ActionMenu.Item>
      <ActionMenu.Item disabled href="https://duck.com">
        Disabled
      </ActionMenu.Item>
    </ActionMenu>
  ))
  .add('nested', _ => (
    <ActionMenu>
      <ActionMenu.Item>Enabled</ActionMenu.Item>
      <ActionMenu.Item
        disabled
        nested={
          <ActionMenu>
            <ActionMenu.Item>Nest 1</ActionMenu.Item>
            <ActionMenu.Item
              nested={
                <ActionMenu>
                  <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                  <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                  <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
                </ActionMenu>
              }
            >
              Nest 2
            </ActionMenu.Item>
          </ActionMenu>
        }
      >
        Nested but disabled
      </ActionMenu.Item>
    </ActionMenu>
  ))

storiesOf('with Position', module)
  .add('BelowLeft', () => (
    <div style={{ margin: core.layout.spacingMedium }}>
      <BelowLeft
        when
        show={
          <div>
            <ActionMenu
              origin={ActionMenu.origins.topLeft}
              shouldFocusOnMount={false}
            >
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
            </ActionMenu>
          </div>
        }
      >
        <div
          style={{
            background: 'pink',
            display: 'inline-block',
            padding: core.layout.spacingXXSmall
          }}
        >
          anchor
        </div>
      </BelowLeft>
    </div>
  ))
  .add('BelowRight', () => (
    <div style={{ margin: core.layout.spacingMedium, float: 'right' }}>
      <BelowRight
        when
        show={
          <div>
            <ActionMenu
              origin={ActionMenu.origins.topRight}
              shouldFocusOnMount={false}
            >
              <ActionMenu.Item>One item</ActionMenu.Item>
              <ActionMenu.Item>Two item</ActionMenu.Item>
              <ActionMenu.Item>Three item</ActionMenu.Item>
            </ActionMenu>
          </div>
        }
      >
        <div
          style={{
            background: 'pink',
            display: 'inline-block',
            padding: core.layout.spacingXXSmall
          }}
        >
          anchor
        </div>
      </BelowRight>
    </div>
  ))

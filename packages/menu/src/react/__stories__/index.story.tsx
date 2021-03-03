import * as core from '@pluralsight/ps-design-system-core'
import { RefFor } from '@pluralsight/ps-design-system-util'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React, { useState, useCallback, useEffect, useRef } from 'react'

import Menu from '..'

const useActive = (ref: React.MutableRefObject<HTMLLIElement | undefined>) => {
  const [active, setActive] = useState(false)
  const handleActiveState = useCallback(() => {
    ref.current && setActive(document.activeElement === ref.current)
  }, [ref, setActive])
  useEffect(() => {
    handleActiveState()
  }, [handleActiveState])
  return {
    active,
    handleActiveState: handleActiveState
  }
}

storiesOf('menu items', module)
  .add('one', () => (
    <Menu>
      <Menu.Item>One item</Menu.Item>
    </Menu>
  ))
  .add('multiple', () => (
    <Menu>
      <Menu.Item>One item</Menu.Item>
      <Menu.Item>Two item</Menu.Item>
      <Menu.Item>Three item</Menu.Item>
    </Menu>
  ))
  .add('lots', () => (
    <Menu>
      {new Array(30).fill(null).map((_, index) => (
        <Menu.Item key={index}>index: {index}</Menu.Item>
      ))}
    </Menu>
  ))
  .add('ellipsis', () => (
    <Menu>
      <Menu.Item>
        <Menu.Ellipsis>
          One item that has text that goes on forever and onward into the
          universes yet to be
        </Menu.Ellipsis>
      </Menu.Item>
    </Menu>
  ))
  .add('long text', () => (
    <Menu>
      <Menu.Item>
        <Menu.Ellipsis>
          One item that has text that goes on forever and onward into the
          universes yet to be
        </Menu.Ellipsis>
      </Menu.Item>
      <Menu.Item>
        <Menu.Ellipsis>
          Another item that takes a long time to explain in the context of
          everything that is in a line.
        </Menu.Ellipsis>
      </Menu.Item>
    </Menu>
  ))
  .add('null item', () => (
    <Menu>
      <Menu.Item>One item</Menu.Item>
      {null}
      <Menu.Item>Skip to three item</Menu.Item>
    </Menu>
  ))
  .add('active item', () => {
    const ref = useRef<HTMLUListElement>()
    const selectedItem = {
      option: 'Active',
      value: 'active'
    }
    useEffect(() => {
      if (ref?.current) {
        const li = ref.current.querySelectorAll('li')[1]
        li.focus()
      }
    })
    return (
      <Menu selectedItem={selectedItem} ref={ref as RefFor<'ul'>}>
        <Menu.Item>Not active</Menu.Item>
        <Menu.Item active value="active">
          Active
        </Menu.Item>
        <Menu.Item active disabled>
          Active disabled
        </Menu.Item>
      </Menu>
    )
  })
  .add('active & selected item', () => {
    const ref = useRef<HTMLUListElement>()
    const option = {
      useActive
    }
    const selectedItem = {
      option: 'Active',
      value: 'active'
    }
    useEffect(() => {
      if (ref?.current) {
        const li = ref.current.querySelectorAll('li')[1]
        li.focus()
      }
    })
    return (
      <Menu
        selectedItem={selectedItem}
        option={option}
        ref={ref as RefFor<'ul'>}
      >
        <Menu.Item>Not active</Menu.Item>
        <Menu.Item active value="active">
          Selected
          <Menu.Check style={{ marginLeft: 'auto' }} />
        </Menu.Item>
        <Menu.Item active disabled>
          Active disabled
        </Menu.Item>
      </Menu>
    )
  })

storiesOf('dividers', module)
  .add('edge', () => (
    <Menu>
      <Menu.Item>One item</Menu.Item>
      <Menu.Divider />
    </Menu>
  ))
  .add('sandwich', () => (
    <Menu>
      <Menu.Item>One item</Menu.Item>
      <Menu.Divider />
      <Menu.Item>Two item</Menu.Item>
      <Menu.Item>Three item</Menu.Item>
    </Menu>
  ))

const handleClick = (_e: unknown, value: unknown) => {
  action('on click')(value)
}

storiesOf('onClick', module).add('flat', () => (
  <Menu onClick={handleClick}>
    <Menu.Item value="one">One item</Menu.Item>
    <Menu.Item value="two">Two item</Menu.Item>
    <Menu.Item value="three">Three item</Menu.Item>
  </Menu>
))

storiesOf('customized styles', module).add('item style', () => (
  <Menu>
    <Menu.Item style={{ outline: '1px solid red' }}>One item</Menu.Item>
    <Menu.Item style={{ outline: '1px solid blue' }}>Two item</Menu.Item>
    <Menu.Item style={{ outline: '1px solid green' }}>Three item</Menu.Item>
  </Menu>
))

storiesOf('link', module).add('a w/ href', () => (
  <Menu>
    <Menu.Item href="https://duckduckgo.com" as="a" target="_blank">
      Links to web
    </Menu.Item>
  </Menu>
))

storiesOf('disabled', module)
  .add('single, disabled', () => (
    <Menu>
      <Menu.Item disabled>Single, disabled</Menu.Item>
    </Menu>
  ))
  .add('multiple, all disabled', () => (
    <Menu>
      <Menu.Item disabled>Mult 1, disabled</Menu.Item>
      <Menu.Item disabled>Mult 2, disabled</Menu.Item>
    </Menu>
  ))
  .add('item', () => (
    <Menu>
      <Menu.Item>Enabled</Menu.Item>
      <Menu.Item disabled>Disabled</Menu.Item>
      <Menu.Item>Enabled</Menu.Item>
      <Menu.Item disabled>Disabled</Menu.Item>
    </Menu>
  ))
  .add('links', () => (
    <Menu>
      <Menu.Item href="https://duck.com" as="a" target="_blank">
        Enabled
      </Menu.Item>
      <Menu.Item disabled href="https://duck.com" as="a" target="_blank">
        Disabled
      </Menu.Item>
      <Menu.Item href="https://duck.com" as="a" target="_blank">
        Enabled
      </Menu.Item>
      <Menu.Item disabled href="https://duck.com" as="a" target="_blank">
        Disabled
      </Menu.Item>
    </Menu>
  ))

storiesOf('with Position', module)
  .add('BelowLeft', () => (
    <div style={{ margin: core.layout.spacingMedium }}>
      <BelowLeft
        when
        show={
          <div>
            <Menu>
              <Menu.Item>One item</Menu.Item>
              <Menu.Item>Two item</Menu.Item>
              <Menu.Item>Three item</Menu.Item>
            </Menu>
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
          <Menu>
            <Menu.Item>One item</Menu.Item>
            <Menu.Item>Two item</Menu.Item>
            <Menu.Item>Three item</Menu.Item>
          </Menu>
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

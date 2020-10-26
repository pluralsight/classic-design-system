import Button from '@pluralsight/ps-design-system-button'
import * as Text from '@pluralsight/ps-design-system-text'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import Drawer from '..'

storiesOf('drawer', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => (
    <Drawer base={<DrawerBase />}>
      <DrawerContent />
    </Drawer>
  ))
  .add('controlled', () => {
    const ControlledDrawerStory = () => {
      const [open, setOpen] = useState(true)
      const toggle = () => {
        setOpen(!open)
      }

      return (
        <div>
          <Button onClick={toggle}>Toggle drawer</Button>

          <Drawer base={<DrawerBase />} startOpen isOpen={open}>
            <DrawerContent />
          </Drawer>
        </div>
      )
    }

    return <ControlledDrawerStory />
  })
  .add('using startOpen prop', () => (
    <Drawer startOpen base={<DrawerBase />}>
      <DrawerContent />
    </Drawer>
  ))
  .add('using onToggle prop', () => {
    const OnToggleDrawerStory = () => {
      const [open, setOpen] = useState(false)
      const toggle = (nextOpen: boolean) => {
        setOpen(nextOpen)
      }

      return (
        <div>
          <Drawer
            base={<DrawerBase>Drawer is {open ? 'open' : 'closed'}</DrawerBase>}
            onToggle={toggle}
          >
            <DrawerContent />
          </Drawer>
        </div>
      )
    }

    return <OnToggleDrawerStory />
  })
  .add('stack of drawers', () => (
    <div>
      <Drawer base={<DrawerBase>The Drawer #1</DrawerBase>}>
        <DrawerContent />
      </Drawer>

      <Drawer base={<DrawerBase>The Drawer #2</DrawerBase>}>
        <DrawerContent />
      </Drawer>

      <Drawer base={<DrawerBase>The Drawer #2</DrawerBase>}>
        <DrawerContent />
      </Drawer>
    </div>
  ))
  .add('stack of non-sibling drawers', () => (
    <div>
      <div>
        <Drawer base={<DrawerBase>The Drawer #1</DrawerBase>}>
          <DrawerContent />
        </Drawer>
      </div>

      <div>
        <Drawer base={<DrawerBase>The Drawer #2</DrawerBase>}>
          <DrawerContent />
        </Drawer>
      </div>

      <div>
        <Drawer base={<DrawerBase>The Drawer #2</DrawerBase>}>
          <DrawerContent />
        </Drawer>
      </div>
    </div>
  ))
  .add('using custom aria label', () => (
    <Drawer base={<DrawerBase />} toggleButtonAriaLabel="custom drawer">
      <DrawerContent />
    </Drawer>
  ))
  .add('prevent toggle', () => {
    const PreventToggleDrawerStory = () => {
      const [open, setOpen] = useState(false)

      const handleToggle = (nextOpen: boolean, evt: React.MouseEvent) => {
        const target = evt.target as HTMLElement
        const targetLabel = target.getAttribute('aria-label')!
        const isCaret = targetLabel.includes('caret down')

        if (isCaret) setOpen(nextOpen)
      }

      return (
        <div>
          <Drawer base={<DrawerBase />} isOpen={open} onToggle={handleToggle}>
            <DrawerContent />
          </Drawer>
        </div>
      )
    }

    return <PreventToggleDrawerStory />
  })

const DrawerBase: React.FC = props => {
  const { children = 'Drawer Base Here', ...rest } = props

  return (
    <div style={{ padding: '10px 0' }}>
      <Text.P {...rest}>{children}</Text.P>
    </div>
  )
}

const DrawerContent: React.FC = props => {
  const { children = 'Drawer Content Here', ...rest } = props

  return (
    <div style={{ padding: 20 }}>
      <Text.P {...rest}>{children}</Text.P>
    </div>
  )
}

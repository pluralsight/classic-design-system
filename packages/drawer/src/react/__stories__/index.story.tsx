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

// TODO: move row stories to Row package to fix circular deps
//
//
//   .add('with row component', () => (
//     <Drawer
//       base={
//         <Row
//           actionBar={[
//             <Button
//               size={Button.sizes.small}
//               appearance={Button.appearances.flat}
//               key="iHeartCats"
//               icon={<Icon.MoreIcon />}
//             />
//           ]}
//           actionBarVisible
//           image={<Row.Image src="https://cataas.com/cat" />}
//           metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
//           size={Row.sizes.medium}
//           title="Look at me! I'm a <Row />!"
//         />
//       }
//     >
//       <DrawerContent />
//     </Drawer>
//   ))
//   .add('row component with actions', () => (
//     <Drawer
//       base={
//         <Row
//           actionBar={[
//             <Button
//               size={Button.sizes.small}
//               appearance={Button.appearances.flat}
//               key="iHeartCats"
//               icon={<Icon.MoreIcon />}
//               onClick={action('action')}
//             />
//           ]}
//           actionBarVisible
//           fullOverlay={
//             <Row.FullOverlayLink>
//               <a href="https://duckduckgo.com?q=overlay">Overlay</a>
//             </Row.FullOverlayLink>
//           }
//           metadata1={[
//             <Row.TextLink>
//               <a href="https://duckduckgo.com?q=cats">Kitten McCatbuns</a>
//             </Row.TextLink>,
//             '23 hours of cuteness'
//           ]}
//           image={
//             <Row.ImageLink>
//               <a href="https://duckduckgo.com?q=image">
//                 <img src="https://cataas.com/cat" />
//               </a>
//             </Row.ImageLink>
//           }
//           size={Row.sizes.medium}
//           title={
//             <Row.TextLink>
//               <a href="https://duckduckgo.com?q=title">
//                 I'm a Row with Actions
//               </a>
//             </Row.TextLink>
//           }
//         />
//       }
//     >
//       <DrawerContent />
//     </Drawer>
//   ))

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

import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button'
import * as Text from '@pluralsight/ps-design-system-text'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import Dialog from '../index'

const closeAction = action('close')
const openAction = action('open')

const MockDialog: React.FC<React.ComponentProps<typeof Dialog>> = props => {
  const children = props.children || (
    <>
      <Text.Heading>
        <h1>Wowzers, a Dialog</h1>
      </Text.Heading>

      <Text.P>
        <a href="#">Brownie bear claw</a> liquorice dragée candy canes pastry
        topping. Chocolate cake soufflé sweet roll jelly beans oat cake donut.
        Wafer chocolate cake pastry chocolate bar fruitcake. Cupcake jelly-o
        croissant lollipop liquorice. <a href="#">Tart donut</a> lollipop dragée
        tootsie roll wafer lemon drops cupcake chocolate bar.
      </Text.P>

      <Text.P>
        Powder apple pie cookie lemon drops marzipan gummies. Chocolate lemon
        drops tiramisu. Cotton candy powder oat cake toffee{' '}
        <a href="#">cotton candy</a> muffin soufflé marshmallow biscuit.
      </Text.P>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button appearance={Button.appearances.stroke}>Secondary CTA</Button>
        <span style={{ marginLeft: 10 }} />
        <Button>Primary CTA</Button>
      </div>
    </>
  )

  return <Dialog {...props}>{children}</Dialog>
}

storiesOf('onClose', module)
  .add('with onClose', () => <MockDialog onClose={closeAction} />)
  .add('with disableCloseButton', () => (
    <MockDialog disableCloseButton>
      <Text.Heading>
        <h1>Wowzers, a Dialog</h1>
      </Text.Heading>
    </MockDialog>
  ))

const positionStories = storiesOf('tailPosition', module)
positionStories.add('none', () => <MockDialog />)

Object.values(Dialog.tailPositions).forEach(pos =>
  positionStories.add(pos, () => <MockDialog tailPosition={pos} />)
)

interface ModalStoryProps extends HTMLPropsFor<'div'> {
  children: (
    storyProps: Record<string, unknown>,
    callbacks: Record<string, unknown>
  ) => React.ReactNode
}

const ModalStory: React.FC<ModalStoryProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const open = (evt: React.MouseEvent) => {
    setIsOpen(true)
    openAction(evt)
  }

  const close = (evt: React.MouseEvent) => {
    setIsOpen(false)
    closeAction(evt)
  }

  const storyProps = {
    'aria-label': 'Storybook Modal',
    onClose: close,
    modal: true
  }

  return (
    <div>
      <Text.P>
        Macaroon danish I love candy macaroon danish toffee muffin. Cotton candy
        chupa chups cupcake I love. Chocolate I love bonbon carrot cake cupcake
        cookie muffin liquorice. I love I love I love jelly-o fruitcake
        <a href="#">I love chocolate cake</a> wafer chupa chups.
      </Text.P>

      <Text.P>
        Sesame snaps cake pudding I love chupa chups I love. Cotton candy
        biscuit oat cake dessert donut I love lemon drops. Cookie croissant
        dragée tootsie roll marzipan I love. Apple pie cheesecake jelly-o
        cheesecake I love cheesecake.
      </Text.P>

      <Button onClick={isOpen ? close : open}>
        {(isOpen ? 'close' : 'open') + ' modal'}
      </Button>

      <Text.P>
        Sweet soufflé <a href="#">apple pie</a>. Halvah icing pudding pastry ice
        cream gingerbread tart candy canes dragée. Pie gingerbread icing.
      </Text.P>

      {isOpen && children(storyProps, { close, open })}
    </div>
  )
}

storiesOf('modal', module)
  .add('default', () => (
    <ModalStory>{props => <MockDialog {...props} />}</ModalStory>
  ))
  .add('no close button', () => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseButton />}
    </ModalStory>
  ))
  .add('no focus on mount', () => (
    <ModalStory>
      {props => <MockDialog {...props} disableFocusOnMount />}
    </ModalStory>
  ))
  .add('no click overlay', () => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseOnOverlayClick />}
    </ModalStory>
  ))
  .add('no escape key', () => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseOnEscape />}
    </ModalStory>
  ))
  .add('no focusable child elements', () => (
    <ModalStory>
      {props => (
        <MockDialog {...props}>
          <Text.Heading>
            <h1>Wowzers, a Dialog</h1>
          </Text.Heading>
        </MockDialog>
      )}
    </ModalStory>
  ))
  .add('overflow-y', () => (
    <ModalStory>
      {props => (
        <MockDialog {...props}>
          {Array.from(Array(20)).map((_, i) => (
            <Text.P key={i}>
              <a href="#">Brownie bear claw</a> liquorice dragée candy canes
              pastry topping. Chocolate cake soufflé sweet roll jelly beans oat
              cake donut. Wafer chocolate cake pastry chocolate bar fruitcake.
              Cupcake jelly-o croissant lollipop liquorice.{' '}
              <a href="#">Tart donut</a> lollipop dragée tootsie roll wafer
              lemon drops cupcake chocolate bar.
            </Text.P>
          ))}
        </MockDialog>
      )}
    </ModalStory>
  ))
  .add('overflow-y with tail', () => (
    <ModalStory>
      {props => (
        <MockDialog {...props} tailPosition={Dialog.tailPositions.topCenter}>
          {Array.from(Array(20)).map((_, i) => (
            <Text.P key={i}>
              <a href="#">Brownie bear claw</a> liquorice dragée candy canes
              pastry topping. Chocolate cake soufflé sweet roll jelly beans oat
              cake donut. Wafer chocolate cake pastry chocolate bar fruitcake.
              Cupcake jelly-o croissant lollipop liquorice.{' '}
              <a href="#">Tart donut</a> lollipop dragée tootsie roll wafer
              lemon drops cupcake chocolate bar.
            </Text.P>
          ))}
        </MockDialog>
      )}
    </ModalStory>
  ))

storiesOf('stylesFor', module).add('dialog_content', () => (
  <ModalStory>
    {props => (
      <MockDialog
        {...props}
        UNSAFE_stylesFor={{
          dialog__content: {
            padding: '128px',
            background: 'red'
          }
        }}
      />
    )}
  </ModalStory>
))

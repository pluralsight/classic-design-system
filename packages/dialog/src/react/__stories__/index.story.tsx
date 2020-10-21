import React from 'react'
import PropTypes from 'prop-types'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button'
import * as Text from '@pluralsight/ps-design-system-text'

import Dialog from '../index.js'

const closeAction = action('close')
const openAction = action('open')

function MockDialog(props) {
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

MockDialog.propTypes = { children: PropTypes.node }

storiesOf('onClose', module)
  .add('with onClose', _ => <MockDialog onClose={closeAction} />)
  .add('with disableCloseButton', _ => (
    <MockDialog disableCloseButton>
      <Text.Heading>
        <h1>Wowzers, a Dialog</h1>
      </Text.Heading>
    </MockDialog>
  ))

const positionStories = storiesOf('tailPosition', module)
positionStories.add('none', _ => <MockDialog />)

Object.keys(Dialog.tailPositions).forEach(pos =>
  positionStories.add(pos, _ => <MockDialog tailPosition={pos} />)
)

function ModalStory(props) {
  const [isOpen, setIsOpen] = React.useState(true)

  const open = evt => {
    setIsOpen(true)
    openAction(evt)
  }

  const close = evt => {
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

      {isOpen && props.children(storyProps, { close, open })}
    </div>
  )
}
ModalStory.propTypes = { children: PropTypes.func }

storiesOf('modal', module)
  .add('default', _ => (
    <ModalStory>{props => <MockDialog {...props} />}</ModalStory>
  ))
  .add('no close button', _ => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseButton />}
    </ModalStory>
  ))
  .add('no focus on mount', _ => (
    <ModalStory>
      {props => <MockDialog {...props} disableFocusOnMount />}
    </ModalStory>
  ))
  .add('no click overlay', _ => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseOnOverlayClick />}
    </ModalStory>
  ))
  .add('no escape key', _ => (
    <ModalStory>
      {props => <MockDialog {...props} disableCloseOnEscape />}
    </ModalStory>
  ))
  .add('no focusable child elements', _ => (
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
  .add('overflow-y', _ => (
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
  .add('overflow-y with tail', _ => (
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

storiesOf('stylesFor', module).add('dialog_content', _ => (
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

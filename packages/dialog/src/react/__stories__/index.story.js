import React from 'react'
import PropTypes from 'prop-types'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

import Dialog from '..'

const closeAction = action('close')
const openAction = action('open')

const Content = props => (
  <Dialog {...props}>
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
  </Dialog>
)

class ModalStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalIsOpen: props.modalDefaultsOpen }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open(event) {
    this.setState(() => ({ modalIsOpen: true }))
    openAction(event)
  }

  close(event) {
    this.setState(() => ({ modalIsOpen: false }))
    closeAction(event)
  }

  render() {
    const { modalIsOpen } = this.state

    return (
      <div>
        <Text.P>
          Macaroon danish I love candy macaroon danish toffee muffin. Cotton
          candy chupa chups cupcake I love. Chocolate I love bonbon carrot cake
          cupcake cookie muffin liquorice. I love I love I love jelly-o
          fruitcake <a href="#">I love chocolate cake</a> wafer chupa chups.
        </Text.P>

        <Text.P>
          Sesame snaps cake pudding I love chupa chups I love. Cotton candy
          biscuit oat cake dessert donut I love lemon drops. Cookie croissant
          dragée tootsie roll marzipan I love. Apple pie cheesecake jelly-o
          cheesecake I love cheesecake.
        </Text.P>

        <Button onClick={modalIsOpen ? this.close : this.open}>
          {(modalIsOpen ? 'close' : 'open') + ' modal'}
        </Button>

        <Text.P>
          Sweet soufflé <a href="#">apple pie</a>. Halvah icing pudding pastry
          ice cream gingerbread tart candy canes dragée. Pie gingerbread icing.
        </Text.P>

        {modalIsOpen &&
          this.props.children({ close: this.close, open: this.open })}
      </div>
    )
  }
}

ModalStory.propTypes = {
  children: PropTypes.func.isRequired,
  modalDefaultsOpen: PropTypes.bool
}
ModalStory.defaultProps = {
  modalDefaultsOpen: true
}

const tailPositionStory = storiesOf('tailPosition', module)
tailPositionStory.add('none', _ => <Content />)

Object.keys(Dialog.tailPositions).forEach(tailPosition =>
  tailPositionStory.add(tailPosition, _ => (
    <Content tailPosition={tailPosition} />
  ))
)

storiesOf('onClose', module).add('with onClose', _ => (
  <Content onClose={closeAction} />
))

storiesOf('modal', module)
  .add('with close button', _ => (
    <ModalStory>
      {({ close }) => (
        <Content onClose={close} aria-label="Storybook Modal" modal />
      )}
    </ModalStory>
  ))
  .add('no focus on mount', _ => (
    <ModalStory>
      {({ close }) => (
        <Content
          disableFocusOnMount
          onClose={close}
          aria-label="Storybook Modal"
          modal
        />
      )}
    </ModalStory>
  ))
  .add('no close button', _ => (
    <ModalStory>
      {({ close }) => (
        <Content
          disableCloseButton
          onClose={close}
          aria-label="Storybook Modal"
          modal
        />
      )}
    </ModalStory>
  ))
  .add('no click overlay', _ => (
    <ModalStory>
      {({ close }) => (
        <Content
          disableCloseOnOverlayClick
          onClose={close}
          aria-label="Storybook Modal"
          modal
        />
      )}
    </ModalStory>
  ))
  .add('no escape key', _ => (
    <ModalStory>
      {({ close }) => (
        <Content
          disableCloseOnEscape
          onClose={close}
          aria-label="Storybook Modal"
          modal
        />
      )}
    </ModalStory>
  ))
  .add('no focusable child element, no lock', _ => (
    <ModalStory modalDefaultsOpen={false}>
      {_ => (
        <Dialog>
          <Text.Heading>
            <h1>Wowzers, a Dialog</h1>
          </Text.Heading>
        </Dialog>
      )}
    </ModalStory>
  ))

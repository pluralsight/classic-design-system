import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import Row from '@pluralsight/ps-design-system-row'
import * as Text from '@pluralsight/ps-design-system-text'

import Drawer from '../index.js'

const DrawerBase = props => (
  <div style={{ padding: '10px 0' }}>
    <Text.P {...props} />
  </div>
)
DrawerBase.propTypes = {
  children: PropTypes.node
}
DrawerBase.defaultProps = {
  children: 'Drawer Base Here'
}

const DrawerContent = props => (
  <div style={{ padding: 20 }}>
    <Text.P {...props} />
  </div>
)
DrawerContent.propTypes = {
  children: PropTypes.node
}
DrawerContent.defaultProps = {
  children: 'Drawer Content Here'
}

const ControlledDrawerStory = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Toggle drawer</Button>
      <Drawer base={<DrawerBase />} startOpen isOpen={open}>
        <DrawerContent />
      </Drawer>
    </div>
  )
}

class PreventToggleDrawerStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(isOpen, evt) {
    const isCaret =
      evt &&
      evt.target &&
      evt.target.attributes['aria-label'] &&
      evt.target.attributes['aria-label'].value === 'caret down icon'
    if (isCaret) {
      this.setState({ isOpen })
    }
  }

  render() {
    return (
      <div>
        <Drawer
          base={<DrawerBase />}
          isOpen={this.state.isOpen}
          onToggle={this.handleToggle}
        >
          <DrawerContent />
        </Drawer>
      </div>
    )
  }
}

class OnToggleDrawerStory extends React.Component {
  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
    this.state = { isOpen: false }
  }

  handleToggle(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    return (
      <div>
        <Drawer
          base={
            <DrawerBase>
              Drawer is {this.state.isOpen ? 'open' : 'closed'}
            </DrawerBase>
          }
          onToggle={this.handleToggle}
        >
          <DrawerContent />
        </Drawer>
      </div>
    )
  }
}

storiesOf('drawer', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => (
    <Drawer base={<DrawerBase />}>
      <DrawerContent />
    </Drawer>
  ))
  .add('controlled', () => <ControlledDrawerStory />)
  .add('using startOpen prop', () => (
    <Drawer startOpen base={<DrawerBase />}>
      <DrawerContent />
    </Drawer>
  ))
  .add('using onToggle prop', () => <OnToggleDrawerStory />)
  .add('with row component', () => (
    <Drawer
      base={
        <Row
          actionBar={[
            <Button
              size={Button.sizes.small}
              appearance={Button.appearances.flat}
              key="iHeartCats"
              icon={<Icon.MoreIcon />}
            />
          ]}
          actionBarVisible
          image={<Row.Image src="https://cataas.com/cat" />}
          metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
          size={Row.sizes.medium}
          title="Look at me! I'm a <Row />!"
        />
      }
    >
      <DrawerContent />
    </Drawer>
  ))
  .add('row component with actions', () => (
    <Drawer
      base={
        <Row
          actionBar={[
            <Button
              size={Button.sizes.small}
              appearance={Button.appearances.flat}
              key="iHeartCats"
              icon={<Icon.MoreIcon />}
              onClick={action('action')}
            />
          ]}
          actionBarVisible
          fullOverlay={
            <Row.FullOverlayLink>
              <a href="https://duckduckgo.com?q=overlay">Overlay</a>
            </Row.FullOverlayLink>
          }
          metadata1={[
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=cats">Kitten McCatbuns</a>
            </Row.TextLink>,
            '23 hours of cuteness'
          ]}
          image={
            <Row.ImageLink>
              <a href="https://duckduckgo.com?q=image">
                <img src="https://cataas.com/cat" />
              </a>
            </Row.ImageLink>
          }
          size={Row.sizes.medium}
          title={
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=title">
                I'm a Row with Actions
              </a>
            </Row.TextLink>
          }
        />
      }
    >
      <DrawerContent />
    </Drawer>
  ))
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
  .add('prevent toggle', () => <PreventToggleDrawerStory />)

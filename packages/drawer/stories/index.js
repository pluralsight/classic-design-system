import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import Row from '@pluralsight/ps-design-system-row/react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Drawer from '../react'

class ControlledDrawerStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle drawer</Button>
        <Drawer base={<div>Drawer Base Here</div>} isOpen={this.state.isOpen}>
          Drawer Content Here
        </Drawer>
      </div>
    )
  }
}

class OnToggleDrawerStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleToggle = isOpen => {
    this.setState({ isOpen })
  }

  render() {
    return (
      <div>
        <Drawer
          base={<div>Drawer is {this.state.isOpen ? 'open' : 'closed'}</div>}
          onToggle={this.handleToggle}
        >
          Drawer Content Here
        </Drawer>
      </div>
    )
  }
}

storiesOf('drawer', module)
  .addDecorator(story => (
    <div style={{ color: 'white', padding: 48, fontSize: 24 }}>{story()}</div>
  ))
  .addDecorator(themeDecorator(addons))
  .add('default', () => (
    <Drawer base={<div>Drawer Base Here</div>}>Drawer Content Here</Drawer>
  ))
  .add('controlled', () => <ControlledDrawerStory />)
  .add('using startOpen prop', () => (
    <Drawer startOpen base={<div>Base here</div>}>
      <div>Panel here</div>
    </Drawer>
  ))
  .add('using onToggle prop', () => <OnToggleDrawerStory />)
  .add('with row component', () => (
    <Drawer
      base={
        <Row
          image={<Row.Image src="https://cataas.com/cat" />}
          title="Look at me! I'm a <Row />!"
          metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
          actionBarVisible
          actionBar={[
            <Row.Action key="iHeartCats" icon={<Icon id="more" />} />
          ]}
        />
      }
    >
      Drawer Content Here
    </Drawer>
  ))
  .add('row component with actions', () => (
    <Drawer
      base={
        <Row
          image={
            <Row.ImageLink>
              <a href="https://duckduckgo.com?q=image">
                <img src="https://cataas.com/cat" />
              </a>
            </Row.ImageLink>
          }
          title={
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=title">
                I'm a Row with Actions
              </a>
            </Row.TextLink>
          }
          metadata1={[
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=cats">Kitten McCatbuns</a>
            </Row.TextLink>,
            '23 hours of cuteness'
          ]}
          fullOverlay={
            <Row.FullOverlayLink>
              <a href="https://duckduckgo.com?q=overlay">Overlay</a>
            </Row.FullOverlayLink>
          }
          actionBarVisible
          actionBar={[
            <Row.Action
              key="iHeartCats"
              icon={<Icon id="more" />}
              onClick={action('action')}
            />
          ]}
        />
      }
    >
      Drawer Content Here
    </Drawer>
  ))
  .add('stack of drawers', () => (
    <div>
      <Drawer base={<div>The Drawer #1</div>} />
      <Drawer base={<div>The Drawer #2</div>} />
      <Drawer base={<div>The Drawer #2</div>} />
    </div>
  ))
  .add('stack of non-sibling drawers', () => (
    <div>
      <div>
        <Drawer base={<div>The Drawer #1</div>} />
      </div>
      <div>
        <Drawer base={<div>The Drawer #2</div>} />
      </div>
      <div>
        <Drawer base={<div>The Drawer #2</div>} />
      </div>
    </div>
  ))
  .add('using custom aria label', () => (
    <Drawer base={<div>Drawer Base Here</div>} drawerLabel="custom drawer">
      Drawer Content Here
    </Drawer>
  ))

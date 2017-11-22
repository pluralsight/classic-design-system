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
        <Drawer base={<div>Drawer is {this.state.isOpen ? 'open' : 'closed'}</div>} onToggle={this.handleToggle}>
          Drawer Content Here
        </Drawer>
      </div>
    )
  }
}

function renderRow() {
  return (
    <Row image={<Row.Image src="https://cataas.com/cat"/>}
         title="Look at me! I'm a <Row />!"
         metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
         actionBarVisible
         actionBar={[<Row.Action key="iHeartCats" icon={<Icon id="more"/>}/>]}
    />
  )
}

storiesOf('drawer', module)
  .addDecorator(story => (
    <div style={{ color: 'white', padding: 48, fontSize: 24 }}>
      {story()}
    </div>
  ))
  .addDecorator(themeDecorator(addons))
  .add('default', () => (
    <Drawer base={<div>Drawer Base Here</div>}>
      Drawer Content Here
    </Drawer>
  ))
  .add('controlled', () => <ControlledDrawerStory /> )
  .add('using onToggle prop', () => <OnToggleDrawerStory />)
  .add('with row component', () => (
    <Drawer base={renderRow()}>
      Drawer Content Here
    </Drawer>
  ))


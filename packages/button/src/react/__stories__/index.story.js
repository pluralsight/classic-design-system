import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon/react'

import Button from '../index.js'

const appearanceStory = storiesOf('Button / appearance', module)
Object.keys(Button.appearances).forEach(app =>
  appearanceStory.add(app, _ => <Button appearance={app}>Click me</Button>)
)

const sizeStory = storiesOf('Button / size', module)
Object.keys(Button.sizes).forEach(size =>
  sizeStory.add(size, _ => <Button size={size}>Click me</Button>)
)

const iconStory = storiesOf('Button / icon', module)
Object.keys(Button.appearances).forEach(app =>
  iconStory.add(app, _ => (
    <Button appearance={app} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.iconAligns).forEach(iconAlign =>
  iconStory.add(iconAlign, _ => (
    <Button iconAlign={iconAlign} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.sizes).forEach(size =>
  iconStory.add(size, _ => (
    <Button size={size} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.appearances).forEach(app =>
  Object.keys(Button.sizes).forEach(size =>
    iconStory.add(`lone ${app} ${size}`, _ => (
      <Button
        appearance={app}
        size={size}
        icon={<Icon id={Icon.ids.check} />}
      />
    ))
  )
)
iconStory.add('vertically aligned rows', _ => (
  <div>
    <Button icon={<Icon id={Icon.ids.check} />}>With icon</Button>
    <Button>Without icon</Button>
  </div>
))

const disabledStory = storiesOf('Button / disabled', module)
disabledStory.add('all', _ => (
  <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
    {Object.keys(Button.appearances).map((app, index) => [
      <React.Fragment key={index}>
        <Button appearance={app}>{app}</Button>
        <Button
          onClick={action('should never click')}
          disabled
          appearance={app}
        >
          {app + ' disabled'}
        </Button>
      </React.Fragment>
    ])}
  </div>
))

disabledStory.add('with icon', _ => (
  <Button disabled icon={<Icon id={Icon.ids.pencil} />}>
    Disabled
  </Button>
))

storiesOf('Button / as link', module)
  .add('default', _ => (
    <Button href="https://duckduckgo.com">Click as link</Button>
  ))
  .add('with icon', _ => (
    <Button href="https://duckduckgo.com" icon={<Icon id={Icon.ids.pencil} />}>
      Click as link
    </Button>
  ))

storiesOf('Button / with ref', module).add('ref to handle focus', _ => (
  <Button innerRef={el => el && el.focus()}>Should be focused</Button>
))

storiesOf('Button / with onClick', module).add('clicks once', _ => (
  <Button onClick={action('click count')} icon={<Icon id={Icon.ids.check} />}>
    Clicks once
  </Button>
))

storiesOf('Button / override styles', module)
  .add('with style', _ => (
    <Button style={{ background: 'red' }} icon={<Icon id={Icon.ids.check} />}>
      Red Button
    </Button>
  ))
  .add('with className', _ => {
    const className = glamor.css({ background: 'green !important' })
    return (
      <Button className={className} icon={<Icon id={Icon.ids.check} />}>
        Green Button
      </Button>
    )
  })

storiesOf('Button / props pass through', module)
  .add('aria-expanded', _ => <Button aria-expanded>aria-expanded</Button>)
  .add('role', _ => <Button role="link">Role Link</Button>)
  .add('data-something', _ => (
    <Button data-something="wow">Custom data attributes</Button>
  ))
  .add('title', _ => <Button title="My caption">With title</Button>)
  .add('anchor download', _ => (
    <Button href="/somewhere" download>
      Link with download
    </Button>
  ))
  .add('button download', _ => <Button download>Button with download</Button>)
  .add('not supported', _ => (
    <Button onMouseOver={action('mouse over')}>Should not mouseover</Button>
  ))

const loadingExample = storiesOf('Button / loading', module)
Object.keys(Button.sizes).forEach(size =>
  loadingExample.add(size, _ => (
    <Button onClick={action('is disabled')} size={size} loading>
      Loading...
    </Button>
  ))
)
Object.keys(Button.appearances).forEach(appearance =>
  loadingExample.add(appearance, _ => (
    <Button appearance={appearance} size={Button.sizes.large} loading>
      Loading...
    </Button>
  ))
)
loadingExample.add('lone icon', _ => (
  <Button
    icon={<Icon id={Icon.ids.check} />}
    size={Button.sizes.large}
    loading
  />
))

class SwitchToLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }

  componentDidMount() {
    this.timeout = setInterval(_ => {
      this.setState({ loading: !this.state.loading })
    }, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    return React.cloneElement(this.props.children, {
      loading: this.state.loading
    })
  }
}

SwitchToLoading.propTypes = {
  children: PropTypes.node.isRequired
}

loadingExample.add('no icon, hidden text', _ => (
  <SwitchToLoading>
    <Button size={Button.sizes.large} loading>
      Text doesnt show when loading if no icon
    </Button>
  </SwitchToLoading>
))

storiesOf('Button / in row', module).add('same vertical height', _ => {
  return (
    <div>
      {Object.values(Button.sizes).map(size => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: Object.values(Button.appearances)
              .map(_ => 'auto')
              .join(' '),
            gap: '8px',
            marginBottom: '8px'
          }}
        >
          {Object.values(Button.appearances).map(appearance => (
            <Button size={size} appearance={appearance}>
              button
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
})

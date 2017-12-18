import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Button from '../react'

const appearanceStory = storiesOf('appearance', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Button.appearances).forEach(app =>
  appearanceStory.add(app, _ => <Button appearance={app}>Click me</Button>)
)

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Button.sizes).forEach(size =>
  sizeStory.add(size, _ => <Button size={size}>Click me</Button>)
)

const iconStory = storiesOf('icon', module).addDecorator(themeDecorator(addons))
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

const disabledStory = storiesOf('disabled', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Button.appearances).forEach(app =>
  disabledStory.add(app, _ => (
    <Button onClick={action('should never click')} disabled appearance={app}>
      Disabled
    </Button>
  ))
)
disabledStory.add('with icon', _ => (
  <Button disabled icon={<Icon id={Icon.ids.pencil} />}>
    Disabled
  </Button>
))

const asLink = storiesOf('as link', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => (
    <Button href="https://duckduckgo.com">Click as link</Button>
  ))
  .add('with icon', _ => (
    <Button href="https://duckduckgo.com" icon={<Icon id={Icon.ids.pencil} />}>
      Click as link
    </Button>
  ))

const refExample = storiesOf('with ref', module)
  .addDecorator(themeDecorator(addons))
  .add('ref to handle focus', _ => (
    <Button innerRef={el => el && el.focus()}>Should be focused</Button>
  ))

const onClickExample = storiesOf('with onClick', module)
  .addDecorator(themeDecorator(addons))
  .add('clicks once', _ => (
    <Button onClick={action('click count')} icon={<Icon id={Icon.ids.check} />}>
      Clicks once
    </Button>
  ))

const overrideStylesExample = storiesOf('override styles', module)
  .addDecorator(themeDecorator(addons))
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

const propsExample = storiesOf('props pass through', module)
  .addDecorator(themeDecorator(addons))
  .add('aria-expanded', _ => (
    <Button aria-expanded={true}>aria-expanded</Button>
  ))
  .add('data-something', _ => (
    <Button data-something="wow">Custom data attributes</Button>
  ))
  .add('title', _ => <Button title="My caption">With title</Button>)
  .add('not supported', _ => (
    <Button onMouseOver={action('mouse over')}>Should not mouseover</Button>
  ))

const loadingExample = storiesOf('loading', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Button.sizes).forEach(size =>
  loadingExample.add(size, _ => (
    <Button size={size} loading>
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
    this.timeout = setTimeout(_ => {
      this.setState({ loading: !this.state.loading })
    }, 500)
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
loadingExample.add('no icon, hidden text', _ => (
  <SwitchToLoading>
    <Button size={Button.sizes.large} loading>
      Text doesnt show when loading if no icon
    </Button>
  </SwitchToLoading>
))

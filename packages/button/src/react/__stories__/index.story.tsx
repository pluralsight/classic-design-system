import { colorsPink } from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'
import Theme from '@pluralsight/ps-design-system-theme'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React, { useEffect, useState, ComponentProps } from 'react'

import Button from '..'

const appearanceStory = storiesOf('Button / appearance', module)
Object.keys(Button.appearances).forEach(app =>
  appearanceStory.add(app, _ => (
    <Button key={app} appearance={app}>
      Click me
    </Button>
  ))
)

const sizeStory = storiesOf('Button / size', module)
Object.keys(Button.sizes).forEach(size =>
  sizeStory.add(size, _ => (
    <Button key={size} size={size}>
      Click me
    </Button>
  ))
)

const iconStory = storiesOf('Button / icon', module)
Object.keys(Button.appearances).forEach(app =>
  iconStory.add(app, _ => (
    <Button key={app} appearance={app} icon={<Icon.CheckIcon key={app} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.iconAligns).forEach(iconAlign =>
  iconStory.add(iconAlign, _ => (
    <Button key={iconAlign} iconAlign={iconAlign} icon={<Icon.CheckIcon />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.sizes).forEach(size =>
  iconStory.add(size, _ => (
    <Button key={size} size={size} icon={<Icon.CheckIcon />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.appearances).forEach(app =>
  Object.keys(Button.sizes).forEach(size =>
    iconStory.add(`lone ${app} ${size}`, _ => (
      <Button
        key={`${app} ${size}`}
        appearance={app}
        size={size}
        icon={<Icon.CheckIcon />}
      />
    ))
  )
)
iconStory.add('vertically aligned rows', _ => (
  <div>
    <Button icon={<Icon.CheckIcon />}>With icon</Button>
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
  <Button disabled icon={<Icon.PencilIcon />}>
    Disabled
  </Button>
))

storiesOf('Button / as link', module)
  .add('default', _ => (
    <Button href="https://duckduckgo.com">Click as link</Button>
  ))
  .add('with icon', _ => (
    <Button href="https://duckduckgo.com" icon={<Icon.PencilIcon />}>
      Click as link
    </Button>
  ))

storiesOf('Button / with ref', module).add('ref to handle focus', _ => {
  function FocusStory() {
    const ref = React.createRef<HTMLButtonElement>()
    React.useEffect(() => {
      if (ref && ref.current) ref.current.focus()
    })
    return <Button ref={ref}>Should be focused</Button>
  }
  return <FocusStory />
})

storiesOf('Button / with onClick', module).add('clicks once', _ => (
  <Button onClick={action('click count')} icon={<Icon.CheckIcon />}>
    Clicks once
  </Button>
))

storiesOf('Button / override styles', module)
  .add('with style', _ => (
    <Button style={{ background: 'red' }} icon={<Icon.CheckIcon />}>
      Red Button
    </Button>
  ))
  .add('with className', _ => {
    const cssSelector = glamor.css({ background: 'green !important' })
    return (
      <Button {...cssSelector} icon={<Icon.CheckIcon />}>
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
  .add('anchor supports download', _ => (
    <Button href="/somewhere" download>
      Link with download
    </Button>
  ))
  .add('button doesnt support download', _ => (
    <Button download>Button with download</Button>
  ))
  .add('not supported', _ => (
    <Button onMouseOver={action('mouse over')}>Should not mouseover</Button>
  ))

const loadingExample = storiesOf('Button / loading', module)
Object.keys(Button.sizes).forEach(size =>
  loadingExample.add(size, _ => (
    <Button key={size} onClick={action('is disabled')} size={size} loading>
      Loading...
    </Button>
  ))
)
Object.keys(Button.appearances).forEach(appearance =>
  loadingExample.add(appearance, _ => (
    <Button
      key={appearance}
      appearance={appearance}
      size={Button.sizes.large}
      loading
    >
      Loading...
    </Button>
  ))
)
loadingExample.add('lone icon', _ => (
  <Button icon={<Icon.CheckIcon />} size={Button.sizes.large} loading />
))

const SwitchToLoading: React.FC = props => {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(!loading)
    }, 1500)

    return () => clearInterval(timer)
  }, [loading])

  return React.cloneElement(props.children as any, {
    loading
  })
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
          key={size}
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
            <Button key={appearance} size={size} appearance={appearance}>
              button
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
})

storiesOf('Button / theme', module).add('nested', _ => (
  <Theme name={Theme.names.dark}>
    <Button appearance={Button.appearances.flat}>{Theme.names.dark}</Button>
    <Theme name={Theme.names.light}>
      <Button appearance={Button.appearances.flat}>{Theme.names.light}</Button>
      <Theme name={Theme.names.dark}>
        <Button appearance={Button.appearances.flat}>{Theme.names.dark}</Button>
      </Theme>
    </Theme>
  </Theme>
))

storiesOf('Button / layout', module).add('fullWidth', _ => (
  <div style={{ outline: `3px dashed ${colorsPink.base}`, width: '400px' }}>
    <div>
      <Button>Normal</Button>
    </div>
    <div>
      <Button layout="fullWidth">Full width</Button>
    </div>
  </div>
))

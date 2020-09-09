import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import Tag from '@pluralsight/ps-design-system-tag'
import TextInput from '@pluralsight/ps-design-system-textinput'

import EmptyState, { EmptyStateProps } from '../../index.js'
import { FunctionComponent } from 'react'

const CustomIllustration: FunctionComponent = () => (
  <svg viewBox="0 0 128 128" aria-hidden role="img">
    <path
      fill="currentColor"
      d="M44.99 43.356v-16.77L109.792 64 44.99 101.414v-16.77l-14.897 8.601v-58.49l14.897 8.601zm0 7.162l-8.695-5.02v37.003l8.695-5.02V50.518zm6.202 30.544v9.609L97.387 64 51.192 37.329v9.608l29.552 17.062-29.552 17.063zm0-7.162l17.147-9.901-17.147-9.9v19.8z"
    />
  </svg>
)

const EmptyStateWithDefaults: FunctionComponent<Partial<
  EmptyStateProps
>> = props => {
  const actions = (
    <EmptyState.Actions>
      <Button>Do a Thing</Button>
    </EmptyState.Actions>
  )
  const caption = (
    <EmptyState.Caption>
      Burgdoggen boudin shoulder, sirloin turducken landjaeger kielbasa brisket.
      Bacon venison meatball pork, alcatra capicola turducken. Salami shoulder
      strip steak filet mignon pork.
    </EmptyState.Caption>
  )
  const heading = (
    <EmptyState.Heading>
      Filet mignon pork chop salami shank tail.
    </EmptyState.Heading>
  )
  const illustration = (
    <EmptyState.Illustration name={EmptyState.Illustration.names.magnify} />
  )
  return (
    <EmptyState
      actions={actions}
      caption={caption}
      heading={heading}
      illustration={illustration}
      {...props}
    />
  )
}

const SearchInput: FunctionComponent = props => <TextInput {...props} />
SearchInput.defaultProps = {
  appearance: TextInput.appearances.subtle,
  icon: <Icon.SearchIcon />,
  placeholder: 'Find Something'
}

const InlineList: FunctionComponent = ({ children, ...props }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    list: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
    item: { display: 'inline-flex', margin: '0 5px 12px' }
  }

  return (
    <div style={styles.list} {...props}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={styles.item}>
          {child}
        </div>
      ))}
    </div>
  )
}

storiesOf('EmptyState', module)
  .add('combo', _ => <EmptyStateWithDefaults />)
  .add('in a small fixed size container', _ => (
    <div style={{ width: 400 }}>
      <EmptyStateWithDefaults />
    </div>
  ))

Object.values(EmptyState.sizes).forEach(size => {
  storiesOf('EmptyState/sizes', module).add(size, _ => (
    <EmptyStateWithDefaults size={size} />
  ))
})

Object.values(EmptyState.Illustration.names).forEach(name => {
  storiesOf('EmptyState/illustrations/large', module).add(name, _ => (
    <EmptyState
      heading={<EmptyState.Heading>{name}</EmptyState.Heading>}
      illustration={<EmptyState.Illustration name={name} />}
      size={EmptyState.sizes.large}
    />
  ))

  storiesOf('EmptyState/illustrations/small', module).add(name, _ => (
    <EmptyState
      heading={<EmptyState.Heading>{name}</EmptyState.Heading>}
      illustration={<EmptyState.Illustration name={name} />}
      size={EmptyState.sizes.small}
    />
  ))
})

storiesOf('EmptyState/illustrations/small', module).add('custom', _ => (
  <EmptyState
    heading={<EmptyState.Heading>Custom Illustration</EmptyState.Heading>}
    illustration={
      <EmptyState.Illustration>
        <CustomIllustration />
      </EmptyState.Illustration>
    }
    size={EmptyState.sizes.small}
  />
))

storiesOf('EmptyState/illustrations/large', module).add('custom', _ => (
  <EmptyState
    heading={<EmptyState.Heading>Custom Illustration</EmptyState.Heading>}
    illustration={
      <EmptyState.Illustration>
        <CustomIllustration />
      </EmptyState.Illustration>
    }
    size={EmptyState.sizes.large}
  />
))

storiesOf('EmptyState/actions', module)
  .add('with an input', _ => (
    <EmptyStateWithDefaults
      actions={
        <EmptyState.Actions>
          <SearchInput />
        </EmptyState.Actions>
      }
    />
  ))
  .add('with buttons', _ => (
    <EmptyStateWithDefaults
      actions={
        <EmptyState.Actions>
          <InlineList>
            <Button appearance={Button.appearances.stroke}>Asssessments</Button>
            <Button appearance={Button.appearances.stroke}>Guides</Button>
            <Button appearance={Button.appearances.stroke}>
              Interactive Courses
            </Button>
            <Button appearance={Button.appearances.stroke}>Paths</Button>
            <Button appearance={Button.appearances.stroke}>Projects</Button>
            <Button appearance={Button.appearances.stroke}>
              Video Courses
            </Button>
          </InlineList>
        </EmptyState.Actions>
      }
    />
  ))
  .add('with tags', _ => (
    <EmptyStateWithDefaults
      actions={
        <EmptyState.Actions>
          <InlineList>
            <Tag>Asssessments</Tag>
            <Tag>Guides</Tag>
            <Tag>Interactive Courses</Tag>
            <Tag>Paths</Tag>
            <Tag>Projects</Tag>
            <Tag>Video Courses</Tag>
          </InlineList>
        </EmptyState.Actions>
      }
    />
  ))

const Show = ({ children, if: showIf, placeholder = null }: ShowProps) => (
  <>{showIf ? children : placeholder}</>
)
type ShowProps = {
  children: React.ReactNode
  if: boolean
  placeholder?: React.ReactNode
}

const MountStory: FunctionComponent = props => {
  const [shown, setShown] = React.useState(true)

  return (
    <>
      <button
        onClick={() => setShown(!shown)}
        style={{ position: 'fixed', top: 20, left: 20 }}
      >
        {shown ? 'unmount' : 'mount'}
      </button>
      <Show if={shown}>{props.children}</Show>
    </>
  )
}

storiesOf('EmptyState/mounting', module).add('toggle show/hide', _ => (
  <MountStory>
    <EmptyStateWithDefaults />
  </MountStory>
))

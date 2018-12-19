import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Tag from '@pluralsight/ps-design-system-tag/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'

import EmptyState from '..'

const EmptyStateWithDefaults = props => <EmptyState {...props} />

EmptyStateWithDefaults.defaultProps = {
  actions: (
    <EmptyState.Actions>
      <Button>Do a Thing</Button>
    </EmptyState.Actions>
  ),
  caption: (
    <EmptyState.Caption>
      Burgdoggen boudin shoulder, sirloin turducken landjaeger kielbasa brisket.
      Bacon venison meatball pork, alcatra capicola turducken. Salami shoulder
      strip steak filet mignon pork, pork loin shankle spare ribs.
    </EmptyState.Caption>
  ),
  heading: (
    <EmptyState.Heading>
      Filet mignon pork chop salami shank tail.
    </EmptyState.Heading>
  ),
  illustration: (
    <EmptyState.Illustration name={EmptyState.Illustration.names.search} />
  )
}

const SearchInput = props => <TextInput {...props} />
SearchInput.defaultProps = {
  appearance: TextInput.appearances.subtle,
  icon: <Icon id={Icon.ids.search} />,
  placeholder: 'Find Something'
}

const InlineList = ({ children, ...props }) => {
  const styles = {
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

storiesOf('EmptyState', module).add('combo', _ => <EmptyStateWithDefaults />)

Object.values(EmptyState.sizes).forEach(size => {
  storiesOf('EmptyState/sizes', module).add(size, _ => (
    <EmptyStateWithDefaults size={size} />
  ))
})

Object.values(EmptyState.Illustration.names).forEach(name => {
  storiesOf('EmptyState/illustrations', module).add(name, _ => (
    <EmptyState
      heading={<EmptyState.Heading>{name}</EmptyState.Heading>}
      illustration={<EmptyState.Illustration name={name} />}
    />
  ))
})

storiesOf('EmptyState/actions', module).add('with an input', _ => (
  <EmptyStateWithDefaults
    actions={
      <EmptyState.Actions>
        <SearchInput />
      </EmptyState.Actions>
    }
  />
))

storiesOf('EmptyState/actions', module).add('with buttons', _ => (
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
          <Button appearance={Button.appearances.stroke}>Video Courses</Button>
        </InlineList>
      </EmptyState.Actions>
    }
  />
))

storiesOf('EmptyState/actions', module).add('with tags', _ => (
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

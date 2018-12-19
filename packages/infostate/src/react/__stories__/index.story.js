import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Tag from '@pluralsight/ps-design-system-tag/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'

import InfoState from '..'

const InfoStateWithDefaults = props => <InfoState {...props} />

InfoStateWithDefaults.defaultProps = {
  actions: (
    <InfoState.Actions>
      <Button>Do a Thing</Button>
    </InfoState.Actions>
  ),
  caption: (
    <InfoState.Caption>
      Burgdoggen boudin shoulder, sirloin turducken landjaeger kielbasa brisket.
      Bacon venison meatball pork, alcatra capicola turducken. Salami shoulder
      strip steak filet mignon pork, pork loin shankle spare ribs.
    </InfoState.Caption>
  ),
  heading: (
    <InfoState.Heading>
      Filet mignon pork chop salami shank tail.
    </InfoState.Heading>
  ),
  illustration: (
    <InfoState.Illustration name={InfoState.Illustration.names.search} />
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

storiesOf('InfoState', module).add('combo', _ => <InfoStateWithDefaults />)

Object.values(InfoState.sizes).forEach(size => {
  storiesOf('InfoState/sizes', module).add(size, _ => (
    <InfoStateWithDefaults size={size} />
  ))
})

Object.values(InfoState.Illustration.names).forEach(name => {
  storiesOf('InfoState/illustrations', module).add(name, _ => (
    <InfoState
      heading={<InfoState.Heading>{name}</InfoState.Heading>}
      illustration={<InfoState.Illustration name={name} />}
    />
  ))
})

storiesOf('InfoState/actions', module).add('with an input', _ => (
  <InfoStateWithDefaults
    actions={
      <InfoState.Actions>
        <SearchInput />
      </InfoState.Actions>
    }
  />
))

storiesOf('InfoState/actions', module).add('with buttons', _ => (
  <InfoStateWithDefaults
    actions={
      <InfoState.Actions>
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
      </InfoState.Actions>
    }
  />
))

storiesOf('InfoState/actions', module).add('with tags', _ => (
  <InfoStateWithDefaults
    actions={
      <InfoState.Actions>
        <InlineList>
          <Tag>Asssessments</Tag>
          <Tag>Guides</Tag>
          <Tag>Interactive Courses</Tag>
          <Tag>Paths</Tag>
          <Tag>Projects</Tag>
          <Tag>Video Courses</Tag>
        </InlineList>
      </InfoState.Actions>
    }
  />
))

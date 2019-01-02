import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import Button from '@pluralsight/ps-design-system-button/react'
import EmptyState from '@pluralsight/ps-design-system-emptystate/react'
import Text from '@pluralsight/ps-design-system-text/react'

import {
  Code,
  Chrome,
  Content,
  Doc,
  Example,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  ThemeToggle,
  withServerProps
} from '../../src/ui'

class IllustrationPreviewGrid extends React.Component {
  get names() {
    return Object.values(EmptyState.Illustration.names)
  }

  render() {
    return (
      <ThemeToggle.Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridGap: '1em',
            paddingTop: core.layout.spacingXXLarge,
            paddingBottom: core.layout.spacingMedium
          }}
        >
          {this.names.map(name => (
            <EmptyState
              key={name}
              style={{ alignSelf: 'center', margin: '0', padding: '0' }}
              heading={
                <EmptyState.Heading style={{ fontSize: 14 }}>
                  {name}
                </EmptyState.Heading>
              }
              illustration={<EmptyState.Illustration name={name} />}
            />
          ))}
        </div>
      </ThemeToggle.Container>
    )
  }
}

const EmptyStateDocumentation = withServerProps(props => (
  <Chrome>
    <Content title="Empty state">
      <PageHeading packageName="emptystate">Empty State</PageHeading>
      <P>
        Present an empty state when there is an opportunity to provide
        explanation of an interface in absence of data. Empty states should
        orient the user, or communicate benefits of a feature. Use the following
        component to standardize empty state messaging display. Nevertheless,
        consider <Link href="#alternatives">alternative</Link> experiences in
        situations where data is not available. For general error messages, use
        the <Link href="/components/errors">error component</Link> instead.
      </P>
      <br />
      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-emptystate
      </Code>
      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import EmptyState from '@pluralsight/ps-design-system-emptystate/react'
      </Code>
      <PropTypes
        props={{
          EmptyState: [
            PropTypes.row(['actions', <code>EmptyState.Action</code>]),
            PropTypes.row(['caption', <code>EmptyState.Caption</code>]),
            PropTypes.row(['heading', <code>EmptyState.Heading</code>, true]),
            PropTypes.row([
              'illustration',
              <code>EmptyState.Illustration</code>
            ]),
            PropTypes.row([
              'size',
              PropTypes.union(EmptyState.sizes),
              false,
              null,
              <span>
                disable responsive layout and set explicit size (from{' '}
                <code>EmptyState.sizes</code>)
              </span>
            ])
          ],
          'EmptyState.Heading': [
            PropTypes.row([
              'as',
              null,
              null,
              <code>h1</code>,
              'heading tagName'
            ])
          ],
          'EmptyState.Illustration': [
            PropTypes.row([
              'name',
              PropTypes.union(EmptyState.Illustration.names),
              true,
              null,
              <span>
                the illustration name (from <code>Illustration.names</code>)
              </span>
            ])
          ]
        }}
      />
      <SectionHeading>In-app example</SectionHeading>
      <P>Default full page empty state</P>
      <Example.React
        includes={{ Button, EmptyState }}
        orient="vertical"
        themeToggle
        codes={[
          `
<EmptyState
  heading={
    <EmptyState.Heading>Alohamora wand elf parchment</EmptyState.Heading>
  }
  caption={
    <EmptyState.Caption>
      Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
    </EmptyState.Caption>
  }
  illustration={<EmptyState.Illustration name={EmptyState.Illustration.names.search} />}
  actions={
    <EmptyState.Actions>
      <Button appearance={Button.appearances.stroke}>Do a Thing</Button>
    </EmptyState.Actions>
  }
/>
        `
        ]}
      />
      <br />
      <P>
        Layout scales from ‘large’ to ‘small’ based on reponsive viewport width.
        OR may be set as <Text.Code>small</Text.Code>
      </P>
      <Example.React
        includes={{ Button, EmptyState }}
        orient="vertical"
        themeToggle
        codes={[
          `
<EmptyState
  heading={
    <EmptyState.Heading>Alohamora wand elf parchment</EmptyState.Heading>
  }
  caption={
    <EmptyState.Caption>
      Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
    </EmptyState.Caption>
  }
  illustration={<EmptyState.Illustration name={EmptyState.Illustration.names.search} />}
  actions={
    <EmptyState.Actions>
      <Button appearance={Button.appearances.stroke}>Do a Thing</Button>
    </EmptyState.Actions>
  }
  size={EmptyState.sizes.small}
/>
        `
        ]}
      />

      <SectionHeading>Alternatives</SectionHeading>
      <P>
        Consider alternatives to empty states. Instad of an empty experience,
        might there be starter, educational, or sample content to present to
        users to help them learn about the product and start using it right
        away?
      </P>

      <Doc>{`
### 👉 Sample content
If the screen is intended to be populated with content by a user, consider suggesting samples or recommendations to ease the effort of getting started.

### 👉 Educational content
A single graphic and message may not be enough to convey the purpose of a feature. Consider animated or video walkthroughs, but keep them brief and dismissable.

### 👉 Best match suggestion
If the absence of data occurs due to a user query such as a search, consider displaying a best match instead of nothing at all.
`}</Doc>

      <SectionHeading>Copy</SectionHeading>
      <P>
        Follow{' '}
        <Link href="/patterns/voice-tone">voice and tone guidelines</Link> when
        writing copy for empty states. Apppropriate empty statement consist of a
        short declarative statement of what occurred, followed by a brief
        sentance giving more context if necessary. Provide a clear CTA button
        that’s no more than 2-3 words. Write clearly and conversationally like
        you would if you were talking to someone. Try to use an active voice
      </P>

      <SectionHeading>Illustration set</SectionHeading>
      <br />
      <IllustrationPreviewGrid />

      <SectionHeading>Custom illustration</SectionHeading>
      <P>
        If no illustration in the standard set is found to be suitable, you may
        officially{' '}
        <Link
          href="//github.com/pluralsight/design-system/issues/new"
          target="_blank"
        >
          aire your grievance
        </Link>
        , or... consider creating a custom illustration within the guidelines of
        the predefined style.
      </P>
      {/* TODO: link to a design kit */}
      <br />
      <Example.React
        includes={{ EmptyState }}
        orient="vertical"
        themeToggle
        codes={[
          `
<EmptyState
  heading={
    <EmptyState.Heading>Alohamora wand elf parchment</EmptyState.Heading>
  }
  caption={
    <EmptyState.Caption>
      Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
    </EmptyState.Caption>
  }
  illustration={
    <EmptyState.Illustration>
      <svg viewBox="0 0 128 128" aria-hidden role="img">
        <path
          fill="currentColor"
          d="M44.99 43.356v-16.77L109.792 64 44.99 101.414v-16.77l-14.897 8.601v-58.49l14.897 8.601zm0 7.162l-8.695-5.02v37.003l8.695-5.02V50.518zm6.202 30.544v9.609L97.387 64 51.192 37.329v9.608l29.552 17.062-29.552 17.063zm0-7.162l17.147-9.901-17.147-9.9v19.8z"
        />
      </svg>
    </EmptyState.Illustration>
  }
/>
        `
        ]}
      />
    </Content>
  </Chrome>
))

export default EmptyStateDocumentation

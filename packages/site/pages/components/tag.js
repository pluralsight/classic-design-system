import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import Tag from '@pluralsight/ps-design-system-tag/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Tag">
      <PageHeading packageName="tag">Tag</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">npm install @pluralsight/ps-design-system-tag</Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Tag from '@pluralsight/ps-design-system-tag/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Tag.appearances),
            null,
            <code>basic</code>,
            <span>
              visual style (from <code>Tag.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'error',
            'boolean',
            null,
            <code>false</code>,
            'error state flag'
          ]),
          PropTypes.row([
            'icon',
            <code>Icon</code>,
            null,
            null,
            'Icon component, right-aligned'
          ]),
          PropTypes.row([
            'isPressed',
            'boolean',
            null,
            <code>false</code>,
            <span>for accessibility of tags used as toggles</span>
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(Tag.sizes),
            null,
            <code>medium</code>,
            <span>
              tag size (from <code>Tag.sizes</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>Appearance</SectionHeading>
      <P>
        Tags come in {Object.keys(Tag.appearances).length} styles. Tags may
        change appearance based on action.
      </P>
      <Example.React
        includes={{ Tag }}
        codes={Object.keys(Tag.appearances).map(
          a => `<Tag appearance={Tag.appearances.${a}}>${a}</Tag>`
        )}
      />

      <SectionHeading>Size</SectionHeading>
      <P>
        Tags come in two sizes. Try to use the default size, <code>medium</code>
        , whenever possible.
      </P>
      <Example.React
        includes={{ Tag }}
        codes={Object.keys(Tag.sizes).map(
          s => `<Tag size={Tag.sizes.${s}}>${s}</Tag>`
        )}
      />

      <SectionHeading>Icon</SectionHeading>
      <P>
        A tag may contain an icon, consistently placed on the right. An icon may
        also receive on <code>onClick</code> prop in this position.
      </P>
      <Example.React
        includes={{ Tag, Icon }}
        codes={[
          `<Tag icon={<Icon id={Icon.ids.close} />}>With Icon</Tag>`,
          `<Tag icon={<Icon id={Icon.ids.close} />} size={Tag.sizes.small}>With Icon</Tag>`,
          `<Tag icon={<Icon id={Icon.ids.close} onClick={_ => alert('icon clicked')} />} size={Tag.sizes.small}>With Icon</Tag>`
        ]}
      />

      <SectionHeading>Hover state</SectionHeading>
      <P>
        A tag may made actionable by adding an <code>onClick</code> or{' '}
        <code>href</code>. If it's actionable, a standard hover state is
        present.
      </P>
      <Example.React
        includes={{ Tag, Icon }}
        codes={[
          `<Tag onClick={_ => alert('click')}>With Click</Tag>`,
          `<Tag href="https://duckduckgo.com">With Link</Tag>`
        ]}
      />

      <SectionHeading>As a Toggle</SectionHeading>
      <P>
        A tag is sometimes used as a toggle. The toggled-on state is trigged
        with the <code>isPressed</code> prop. It will handle styling and
        accessibility concerns. Controlling applications are in charge of
        storing toggled state.
      </P>
      <Example.React
        includes={{ Tag, Icon }}
        codes={[`<Tag isPressed>Toggled on</Tag>`, `<Tag>Toggled off</Tag>`]}
      />

      <SectionHeading>Error</SectionHeading>
      <P>
        Error states are engaged with the <Text.Code>error</Text.Code> flag.
        This is useful when tags are used from within a form
      </P>
      <Example.React
        includes={{ Tag }}
        codes={[`<Tag error>Problem tag</Tag>`]}
      />
    </Content>
  </Chrome>
))

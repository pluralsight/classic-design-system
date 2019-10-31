import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import * as Text from '@pluralsight/ps-design-system-text/react.js'
import Theme from '@pluralsight/ps-design-system-theme/react.js'
import Typeahead from '@pluralsight/ps-design-system-typeahead'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default () => (
  <Chrome>
    <Content title="Typeahead">
      <PageHeading beta packageName="typeahead">
        Typeahead
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-typeahead
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Typeahead from '@pluralsight/ps-design-system-typeahead'
      </Code>

      <PropTypes
        props={{
          Typeahead: [
            PropTypes.row([
              'appearance',
              PropTypes.union(Typeahead.appearances),
              null,
              <code>default</code>,
              <span>
                visual style (from <code>Typeahead.appearances</code>)
              </span>
            ]),
            PropTypes.row([
              'disabled',
              'boolean',
              null,
              <code>false</code>,
              'standard input disable flag'
            ]),
            PropTypes.row([
              'error',
              'boolean',
              null,
              <code>false</code>,
              'error state flag'
            ]),
            PropTypes.row([
              'label',
              'string',
              null,
              null,
              'identifying string for input'
            ]),
            PropTypes.row([
              'onChange',
              '(Event, nextValue) => ()',
              null,
              null,
              <span>triggered when value changes</span>
            ]),
            PropTypes.row([
              'placeholder',
              'string',
              null,
              null,
              'in-field usage hint'
            ]),
            PropTypes.row([
              'size',
              PropTypes.union(Typeahead.sizes),
              null,
              <code>medium</code>,
              <span>
                horizontal icon placement (from <code>Typeahead.sizes</code>)
              </span>
            ]),
            PropTypes.row([
              'subLabel',
              'string',
              null,
              null,
              'supporting text or error messaging'
            ]),
            PropTypes.row([
              'value',
              <code>string</code>,
              null,
              null,
              <span>controlled value</span>
            ])
          ],
          'Typeahead.Suggestion': [
            PropTypes.row([
              'children',
              <code>string</code>,
              null,
              null,
              <span>suggestion text</span>
            ])
          ]
        }}
      />
      <SectionHeading>In-app example</SectionHeading>
      <br />
      <InAppExample />

      <SectionHeading>Appearance</SectionHeading>
      <P>
        For a more subtle look, use <Text.Code>subtle</Text.Code> appearance. So
        subtle.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Typeahead }}
        themeToggle
        codes={[
          `
<Typeahead
  appearance={Typeahead.appearances.subtle}
  placeholder="Search"
/>
`
        ]}
      />
      <SectionHeading>Size</SectionHeading>
      <P>
        The small typeahead is ideal for usage within table rows otherwise use
        the default, medium size typeahead, in forms for example.
      </P>
      <Example.React
        orient="vertical"
        outputStyle={{ paddingBottom: '116px' }}
        themeToggle
        includes={{ Typeahead }}
        codes={[
          `
<Typeahead
placeholder="medium typeahead"
/>`,
          `<Typeahead
placeholder="small typeahead"
size={Typeahead.sizes.small}
/>
          `
        ]}
      />
    </Content>
  </Chrome>
)

function InAppExample() {
  const options = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <React.Fragment>
      <style jsx>{`
        .example {
          padding: ${core.layout.spacingLarge};
          background: ${core.colors.gray06};
          color: ${core.colors.white};
          min-height: 220px;
        }
      `}</style>

      <div className="example">
        <Theme>
          <Typeahead label="Level" placeholder="Select a Level">
            {options.map((option, key) => (
              <Typeahead.Suggestion key={key}>{option}</Typeahead.Suggestion>
            ))}
          </Typeahead>
        </Theme>
      </div>

      <Code collapsible language="javascript">
        {`
const options = ['Beginner', 'Intermediate', 'Advanced']

<Typeahead label="Level" placeholder="Select a Level">
  {options.map((option, key) => (
    <Typeahead.Suggestion key={key}>{options}</Typeahead.Suggestion>
  ))}
</Typeahead>
`}
      </Code>
    </React.Fragment>
  )
}

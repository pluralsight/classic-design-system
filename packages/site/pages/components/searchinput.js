import React from 'react'

import core from '@pluralsight/ps-design-system-core'
import SearchInput from '@pluralsight/ps-design-system-searchinput/react'
import Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Search Input">
      <PageHeading packageName="searchinput">Search Input</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-searchinput
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import SearchInput from
        '@pluralsight/ps-design-system-searchinput/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'label',
            'string',
            null,
            null,
            'non-standard above-field label'
          ]),
          PropTypes.row([
            'onClear',
            'function',
            null,
            null,
            'show clear button and trigger when button is clicked'
          ]),
          PropTypes.row([
            'error',
            'boolean',
            null,
            <code>false</code>,
            'show error state'
          ]),
          PropTypes.row([
            'loading',
            'boolean',
            null,
            <code>false</code>,
            'show progress indicator'
          ]),
          PropTypes.row([
            'placeholder',
            'string',
            null,
            null,
            'standard in-field usage hint'
          ]),
          PropTypes.row([
            'subLabel',
            'string',
            null,
            null,
            'non-standard below-field label or error message'
          ])
        ]}
      />

      <SectionHeading>Loading</SectionHeading>
      <P>Replaces the search icon with a loading indicator</P>
      <Example.React
        themeToggle
        includes={{ SearchInput }}
        codes={[
          `<SearchInput loading placeholder="What are you looking for?" />`
        ]}
      />

      <SectionHeading>Clear Icon</SectionHeading>
      <P>
        Providing a <Text.Code>onClear</Text.Code> prop will display a close
        icon.
      </P>
      <Example.React
        themeToggle
        includes={{ SearchInput }}
        codes={[
          `<SearchInput onClear={() => null} placeholder="What are you looking for?" />`
        ]}
      />
      <SectionHeading>Guidelines</SectionHeading>

      <P>Exercise consistency and clarity with explicit placeholder text.</P>
      <Guideline
        do={<SearchInput placeholder="Search for people" />}
        dont={<SearchInput placeholder="Filter" />}
      />

      <P>Use consistent theming to encourage visual hierarchy</P>
      <Guideline
        do={
          <div
            style={{
              background: core.colors.gray04,
              borderRadius: '4px',
              padding: core.layout.spacingLarge
            }}
          >
            <Theme>
              <SearchInput
                placeholder="Search for people"
                style={{ display: 'block', width: '100%' }}
              />
            </Theme>
          </div>
        }
        dont={
          <div
            style={{
              background: core.colors.gray04,
              borderRadius: '4px',
              padding: core.layout.spacingLarge
            }}
          >
            <Theme name="light">
              <SearchInput
                placeholder="Search for people"
                style={{ display: 'block', width: '100%' }}
              />
            </Theme>
          </div>
        }
      />
    </Content>
  </Chrome>
))

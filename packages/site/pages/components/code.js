import CircularProgress from '@pluralsight/ps-design-system-circularprogress/react'
import core from '@pluralsight/ps-design-system-core'
import {
  Code as DSCode,
  P as DSP
} from '@pluralsight/ps-design-system-text/react'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const formatVarName = name => 'psColors' + name[0].toUpperCase() + name.slice(1)
const ColorDesc = props => (
  <div className="color">
    <div
      className="swatch"
      style={{ background: core.colors[props.varName] }}
    />
    <div className="varName" style={{ color: core.colors[props.varName] }}>
      {formatVarName(props.varName)}
    </div>
    <div className="divider">-</div>
    <div className="desc">{props.children}</div>
    <style jsx>{`
      .color {
        display: flex;
        align-items: center;
        color: ${core.colors.gray02};
      }
      .swatch {
        height: 16px;
        width: 80px;
        margin-right: ${core.layout.spacingMedium};
      }
      .varName {
        font-family: ${core.type.fontFamilyCode};
      }
      .divider {
        display: inline-block;
        margin: 0 ${core.layout.spacingXXSmall};
      }
      .desc {
      }
    `}</style>
  </div>
)

const CodeColors = _ => (
  <div className="colors">
    <ColorDesc varName="bone">
      default code, body text, primary content
    </ColorDesc>
    <ColorDesc varName="gray02">comments, invisibles</ColorDesc>
    <ColorDesc varName="codeRed">
      keywords, storage, selector, markup italic, diff changed
    </ColorDesc>
    <ColorDesc varName="codeOrange">
      integers, boolean, constants, XML attributes, markup link url
    </ColorDesc>
    <ColorDesc varName="codeYellow">
      classes, markup bold, search text background
    </ColorDesc>
    <ColorDesc varName="codeGreen">
      strings, inherited class, markup code, diff inserted
    </ColorDesc>
    <ColorDesc varName="codeTurquoise">
      support, regular expressions, escape characters, markup quotes
    </ColorDesc>
    <ColorDesc varName="codeBlue">
      functions, methods, attribute ids, headings
    </ColorDesc>
    <ColorDesc varName="codePurple">
      variables, XML tags, markup link text, markup lists, diff deleted
    </ColorDesc>
    <ColorDesc varName="codeSand">
      {`deprecated, opening/closing embedded language tags e.g. <?php?>`}
    </ColorDesc>
    <style jsx>{`
      .colors {
        padding: ${core.layout.spacingLarge} ${core.layout.spacingMedium};
        background: ${core.colors.gray05};
        font-weight: ${core.type.fontWeightBook};
        font-size: ${core.type.fontSizeSmall};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Code">
      <PageHeading packageName="text">Code</PageHeading>

      <P>
        The code component requires the standard{' '}
        <Link href="/core/typography#monospace-font">monospace typeface</Link>,
        Source Code Pro. Import it into your app with:
      </P>
      <Code language="css">
        {`@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:500’);`}
      </Code>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-text
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        {`import { Code } from '@pluralsight/ps-design-system-text/react'`}
      </Code>

      <SectionHeading>Inline code</SectionHeading>
      <P>Use when presenting code strings inline with body text.</P>
      <Example.React
        includes={{ P: DSP, Code: DSCode }}
        codes={[`<P>The text has <Code>inline-code</Code> in the middle.</P>`]}
      />

      <SectionHeading>Light theme</SectionHeading>
      <P>
        To specify the light theme, wrap your components in a <code>Theme</code>{' '}
        component.
      </P>
      <Example.React
        includes={{ P: DSP, Code: DSCode, Theme }}
        codes={[
          `
<Theme name={Theme.names.light}>
  <P>The text has <Code>inline-code</Code> in the middle.</P>
</Theme>
`
        ]}
        themeName={Theme.names.light}
      />

      <SectionHeading>Code block</SectionHeading>
      <P>
        Construct your own code block for code snippets longer than a line or
        single expression.
      </P>
      <P>
        Code blocks can come in so many varieties, supported differently by
        various libraries, that the Design System doesn't favor any single
        option. Choose what you find most useful and complementary to these
        guidelines.
      </P>
      <P>
        In order to ensure proper color contrast when rendering your code
        blocks, don't use any dark background{' '}
        <Link href="/core/color">color</Link> lighter than{' '}
        <DSCode>gray06</DSCode>.
      </P>
      <Code language="bash">{`const what = "\'s amazing"
console.log('Design System' + what)`}</Code>

      <SectionHeading>Syntax highlighting</SectionHeading>
      <P>
        Code highlighting should be applied consistently throughout the product
        based on the language syntax being highlighted. Install the{' '}
        <Link href="/core/color">core palette</Link> to access standard code
        highlighting colors.
      </P>
      <CodeColors />
    </Content>
  </Chrome>
))

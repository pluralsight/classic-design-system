import * as core from '@pluralsight/ps-design-system-core'
import * as Text from '@pluralsight/ps-design-system-text'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Link,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const formatVarName = name =>
  'psColorsCode' + name[0].toUpperCase() + name.slice(1)

const ColorDesc = props => (
  <div className="color">
    <div
      className="swatch"
      style={{ background: core.colorsCode[props.varName] }}
    />
    <div className="varName" style={{ color: core.colorsCode[props.varName] }}>
      {formatVarName(props.varName)}
    </div>
    <div className="divider">-</div>
    <div className="desc">{props.children}</div>
    <style jsx>{`
      .color {
        display: flex;
        align-items: center;
        color: ${core.colorsTextIcon.lowOnDark};
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
ColorDesc.propTypes = {
  children: PropTypes.node,
  varName: PropTypes.string
}

const CodeColors = _ => (
  <div className="colors">
    <ColorDesc varName="white">
      default code, body text, primary content
    </ColorDesc>
    <ColorDesc varName="gray">comments, invisibles</ColorDesc>
    <ColorDesc varName="red">
      keywords, storage, selector, markup italic, diff changed
    </ColorDesc>
    <ColorDesc varName="orange">
      integers, boolean, constants, XML attributes, markup link url
    </ColorDesc>
    <ColorDesc varName="yellow">
      classes, markup bold, search text background
    </ColorDesc>
    <ColorDesc varName="green">
      strings, inherited class, markup code, diff inserted
    </ColorDesc>
    <ColorDesc varName="turquoise">
      support, regular expressions, escape characters, markup quotes
    </ColorDesc>
    <ColorDesc varName="blue">
      functions, methods, attribute ids, headings
    </ColorDesc>
    <ColorDesc varName="purple">
      variables, XML tags, markup link text, markup lists, diff deleted
    </ColorDesc>
    <ColorDesc varName="sand">
      {`deprecated, opening/closing embedded language tags e.g. <?php?>`}
    </ColorDesc>
    <style jsx>{`
      .colors {
        padding: ${core.layout.spacingLarge} ${core.layout.spacingMedium};
        background: ${core.colorsBackgroundDark[2]};
        font-weight: ${core.type.fontWeightBook};
        font-size: ${core.type.fontSizeSmall};
      }
    `}</style>
  </div>
)

export default _ => (
  <Chrome>
    <Content title="Code">
      <PageHeading packageName="text">Code</PageHeading>

      <P>
        The code component requires the standard{' '}
        <Link href="/core/typography#monospace-font">monospace typeface</Link>,
        Source Code Pro. Import it into your app with:
      </P>
      <Code language="css">
        @import
        url('https://fonts.googleapis.com/css?family=Source+Code+Pro:500');
      </Code>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-text
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        {`import { Code } from '@pluralsight/ps-design-system-text'`}
      </Code>

      <SectionHeading>Inline code</SectionHeading>
      <P>Use when presenting code strings inline with body text.</P>
      <Example.React
        themeToggle
        includes={{ Text: Text }}
        codes={[
          `<Text.P>The text has <Text.Code>inline-code</Text.Code> in the middle.</Text.P>`
        ]}
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
        <Text.Code>gray06</Text.Code>.
      </P>
      <Code language="bash">{`const what = "'s amazing"
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
)

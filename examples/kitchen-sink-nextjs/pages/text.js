import { Heading } from '@pluralsight/ps-design-system-text'
import { List } from '@pluralsight/ps-design-system-text'
import { P } from '@pluralsight/ps-design-system-text'
import { Label } from '@pluralsight/ps-design-system-text'
import { Code } from '@pluralsight/ps-design-system-text'
import React from 'react'

const Headings = props => {
  return (
    <React.Fragment>
      <Heading size={Heading.sizes.xLarge}>
        <h1>Heading xLarge</h1>
      </Heading>

      <Heading size={Heading.sizes.large}>
        <h2>Heading large</h2>
      </Heading>

      <Heading size={Heading.sizes.medium}>
        <h3>Heading medium</h3>
      </Heading>

      <Heading size={Heading.sizes.small}>
        <h4>Heading small</h4>
      </Heading>

      <Heading size={Heading.sizes.xSmall}>
        <h5>Heading xSmall</h5>
      </Heading>

      <Heading size={Heading.sizes.xXSmall}>
        <h6>Heading xXSmall</h6>
      </Heading>

      <Heading size={Heading.sizes.xXXSmall}>
        <h6>Heading xXXSmall</h6>
      </Heading>
    </React.Fragment>
  )
}

const Labels = props => {
  return (
    <React.Fragment>
      <div>
        <Label size={Label.sizes.large}>Label - large</Label>
      </div>
      <div>
        <Label size={Label.sizes.medium}>Label - medium</Label>
      </div>
      <div>
        <Label size={Label.sizes.small}>Label - small</Label>
      </div>
      <div>
        <Label size={Label.sizes.xSmall}>Label - xSmall</Label>
      </div>
    </React.Fragment>
  )
}

const Ps = props => {
  return (
    <React.Fragment>
      <P size={P.sizes.large}>
        <strong>Paragraph - large</strong> - Lorem ipsum dolor sit amet
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation nisi ut
        aliquip ex ea commodo consequat. Lorem <em>ipsum dolor sit</em> amet
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </P>

      <P size={P.sizes.normal}>
        <strong>Paragraph - normal</strong> - Lorem ipsum dolor sit amet
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation nisi ut
        aliquip ex ea commodo consequat. Lorem <em>ipsum dolor sit</em> amet
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </P>

      <P size={P.sizes.small}>
        <strong>Paragraph - small</strong> - Lorem ipsum dolor sit amet
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation nisi ut
        aliquip ex ea commodo consequat. Lorem <em>ipsum dolor sit</em> amet
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </P>
    </React.Fragment>
  )
}

const Lists = props => {
  return (
    <div className="example-grid--col-3">
      <List>
        <List.Item>apple</List.Item>
        <List.Item>orange</List.Item>
        <List.Item>banana</List.Item>
        <List.Item>strawberry</List.Item>
        <List.Item>papaya</List.Item>
      </List>

      <List type="bulleted">
        <List.Item>apple</List.Item>
        <List.Item>orange</List.Item>
        <List.Item>banana</List.Item>
        <List.Item>strawberry</List.Item>
        <List.Item>papaya</List.Item>
      </List>

      <List type="numbered">
        <List.Item>apple</List.Item>
        <List.Item>orange</List.Item>
        <List.Item>banana</List.Item>
        <List.Item>strawberry</List.Item>
        <List.Item>papaya</List.Item>
      </List>
    </div>
  )
}

const Codes = props => {
  return (
    <React.Fragment>
      <P>
        <Code>code block</Code> at the beginning of a paragraph.
      </P>
      <P>
        At the beginning of a paragraph <Code>code block</Code>
      </P>
      <P>
        Wrapping code block
        <Code>
          buy-in programmatically, or out of the loop. I'll book a meeting so we
          can solution this before the sprint is over get buy-in, and closing
          these latest prospects is like putting socks on an octopus. Knowledge
          is power
        </Code>{' '}
        with text on the end.
      </P>
    </React.Fragment>
  )
}

const Example = () => {
  return (
    <div>
      <Headings />
      <Labels />
      <Ps />
      <Lists />
      <Codes />
    </div>
  )
}

export default Example

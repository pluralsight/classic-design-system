import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'
import Scrollable from '@pluralsight/ps-design-system-scrollable'

import {
  Chrome,
  Code,
  Content,
  Example,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default function ScrollableDocs() {
  return (
    <Chrome>
      <Content title="Scrollable">
        <PageHeading packageName="scrollable">Scrollable</PageHeading>

        <Intro>Replaces the native scrollbar with a custom design</Intro>

        <P>Install the component dependency:</P>
        <Code language="bash">
          npm install @pluralsight/ps-design-system-scrollable
        </Code>

        <P>Include a React component in your project:</P>
        <Code language="javascript">
          import Scrollable from '@pluralsight/ps-design-system-scrollable'
        </Code>

        <PropTypes
          props={[
            PropTypes.row(
              [
                'children',
                <span>
                  <code>node</code>[]
                </span>,
                true,
                null,
                ''
              ],
              [
                'contentAs',
                <span>
                  <code>Element</code> || <code>string</code>
                </span>,
                true,
                null,
                'element or tag name to use for content node'
              ]
            )
          ]}
        />

        <SectionHeading>Usage pattern</SectionHeading>
        <P>
          To style the scrollbar simply replace your block level element with
          the <Text.Code>Scrollable</Text.Code> component.
        </P>

        <Example.React
          themeToggle
          includes={{ Scrollable, Text }}
          codes={[
            `
<Scrollable style={{ height: 260, outline: '1px dashed pink' }}>
  <Text.P>
    There's not a thing in the world wrong with washing your brush. With
    practice comes confidence. Don't be afraid to make these big decisions.
    Once you start, they sort of just make themselves.
  </Text.P>

  <Text.P>
    You can't have light without dark. You can't know happiness unless you've
    known sorrow. See. We take the corner of the brush and let it play
    back-and-forth. Every day I learn. If we're gonna walk though the woods,
    we need a little path. We don't need any guidelines or formats. All we
    need to do is just let it flow right out of us.
  </Text.P>

  <Text.P>
    Let's make a nice big leafy tree. Let's go up in here, and start having
    some fun God gave you this gift of imagination. Use it. Life is too short
    to be alone, too precious. Share it with a friend.
  </Text.P>

  <Text.P>
    I get carried away with this brush cleaning. What the devil. It just
    happens - whether or not you worried about it or tried to plan it.
    Imagination is the key to painting.
  </Text.P>

  <Text.P>
    Use absolutely no pressure. Just like an angel's wing. We'll put some
    happy little leaves here and there. You don't have to spend all your time
    thinking about what you're doing, you just let it happen. Just let your
    mind wander and enjoy. This should make you happy.
  </Text.P>

  <Text.P>
    Very easy to work these to death. Just a happy little shadow that lives in
    there. There are no mistakes. You can fix anything that happens. But
    they're very easily killed. Clouds are delicate.
  </Text.P>

  <Text.P>
    We'll throw some happy little limbs on this tree. You better get your coat
    out, this is going to be a cold painting. The only thing worse than yellow
    snow is green snow.
  </Text.P>
</Scrollable>
`
          ]}
        />
      </Content>
    </Chrome>
  )
}

import { storiesOf } from '@storybook/react'
import { css } from 'glamor'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import * as Text from '@pluralsight/ps-design-system-text'

import Scrollable, { renderContentProps } from '../index'

storiesOf('components|Scrollable', module)
  .addDecorator(storyFn => (
    <div
      {...css({
        display: 'grid',
        gap: core.layout.spacingLarge,
        gridTemplateColumns: '50% 50%'
      })}
    >
      {storyFn()}
    </div>
  ))
  .add('basic', () => (
    <>
      <ScrollableWithDefaults>
        <Filler />
      </ScrollableWithDefaults>

      <VanillaScroll>
        <Filler />
      </VanillaScroll>
    </>
  ))
  .add('with container padding', () => (
    <>
      <ScrollableWithDefaults {...css({ padding: core.layout.spacingMedium })}>
        <Filler />
      </ScrollableWithDefaults>

      <VanillaScroll {...css({ padding: core.layout.spacingMedium })}>
        <Filler />
      </VanillaScroll>
    </>
  ))
  .add('with content padding', () => (
    <>
      <ScrollableWithDefaults>
        <Filler {...css({ padding: core.layout.spacingMedium })} />
      </ScrollableWithDefaults>

      <VanillaScroll>
        <Filler {...css({ padding: core.layout.spacingMedium })} />
      </VanillaScroll>
    </>
  ))
  .add('no scroll needed', () => (
    <>
      <ScrollableWithDefaults>
        <Text.P>hello world</Text.P>
      </ScrollableWithDefaults>

      <VanillaScroll>
        <Text.P>hello world</Text.P>
      </VanillaScroll>
    </>
  ))
  .add('dynamic sizing', () => {
    function ResizeStory() {
      const initialHeight = 300
      const [height, setHeight] = React.useState(initialHeight)

      const expand = () => setHeight(prev => prev + 100)
      const collapse = () =>
        setHeight(prev => {
          const next = prev - 100
          return next < initialHeight ? initialHeight : next
        })

      return (
        <ScrollableWithDefaults {...css({ height })}>
          <div {...css({ position: 'relative', paddingTop: 50 })}>
            <Filler {...css({ padding: core.layout.spacingMedium })} />

            <div
              {...css({
                alignItems: 'center',
                display: 'flex',
                height: 50,
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%'
              })}
            >
              <button disabled={height <= initialHeight} onClick={collapse}>
                collapse
              </button>
              <button onClick={expand}>expand</button>
            </div>
          </div>
        </ScrollableWithDefaults>
      )
    }

    return <ResizeStory />
  })
  .add('with custom tag', () => (
    <>
      <ScrollableWithDefaults
        renderContent={(props, ref) => {
          return (
            <main {...props} ref={ref}>
              {props.children}
            </main>
          )
        }}
      >
        <Filler />
      </ScrollableWithDefaults>

      <ScrollableWithDefaults
        renderContent={(props, ref) => {
          return (
            <aside {...props} ref={ref}>
              {props.children}
            </aside>
          )
        }}
      >
        <Filler />
      </ScrollableWithDefaults>
    </>
  ))

/* eslint-disable react/no-unescaped-entities */
const Filler: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
  <div
    {...props}
    {...css({
      '& > p': { marginBottom: 10 },
      '& > p:last-child': { marginBottom: 0 }
    })}
  >
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
  </div>
)
/* eslint-enable react/no-unescaped-entities */

const ScrollableWithDefaults: React.FC<
  Partial<React.ComponentProps<typeof Scrollable>>
> = props => {
  return (
    <Scrollable
      {...css({
        height: 260,
        outline: '1px dashed pink',
        width: 500
      })}
      {...props}
    >
      {props.children}
    </Scrollable>
  )
}

const VanillaScroll: React.FC = props => {
  return (
    <div
      {...css({
        height: 260,
        outline: '1px dashed lightblue',
        overflowX: 'auto',
        overflowY: 'none',
        width: 500
      })}
      {...props}
    />
  )
}

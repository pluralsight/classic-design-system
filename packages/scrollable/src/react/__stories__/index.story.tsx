/* eslint-disable react/no-unescaped-entities */

import { layout } from '@pluralsight/ps-design-system-core'
import { P } from '@pluralsight/ps-design-system-text'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { Scrollable } from '../index'

const glamor = glamorDefault || glamorExports

const Filler: React.FC<HTMLPropsFor<'div'>> = props => (
  <div
    {...props}
    {...glamor.css({
      '& > p': { marginBottom: 10 },
      '& > p:last-child': { marginBottom: 0 }
    })}
  >
    <P>
      There's not a thing in the world wrong with washing your brush. With
      practice comes confidence. Don't be afraid to make these big decisions.
      Once you start, they sort of just make themselves.
    </P>

    <P>
      You can't have light without dark. You can't know happiness unless you've
      known sorrow. See. We take the corner of the brush and let it play
      back-and-forth. Every day I learn. If we're gonna walk though the woods,
      we need a little path. We don't need any guidelines or formats. All we
      need to do is just let it flow right out of us.
    </P>

    <P>
      Let's make a nice big leafy tree. Let's go up in here, and start having
      some fun God gave you this gift of imagination. Use it. Life is too short
      to be alone, too precious. Share it with a friend.
    </P>

    <P>
      I get carried away with this brush cleaning. What the devil. It just
      happens - whether or not you worried about it or tried to plan it.
      Imagination is the key to painting.
    </P>

    <P>
      Use absolutely no pressure. Just like an angel's wing. We'll put some
      happy little leaves here and there. You don't have to spend all your time
      thinking about what you're doing, you just let it happen. Just let your
      mind wander and enjoy. This should make you happy.
    </P>

    <P>
      Very easy to work these to death. Just a happy little shadow that lives in
      there. There are no mistakes. You can fix anything that happens. But
      they're very easily killed. Clouds are delicate.
    </P>

    <P>
      We'll throw some happy little limbs on this tree. You better get your coat
      out, this is going to be a cold painting. The only thing worse than yellow
      snow is green snow.
    </P>
  </div>
)

const ScrollableWithDefaults: React.FC<
  Partial<React.ComponentProps<typeof Scrollable>>
> = props => (
  <Scrollable
    {...glamor.css({
      height: 260,
      outline: '1px dashed pink',
      width: 500
    })}
    {...props}
  />
)

const VanillaScroll: React.FC<HTMLPropsFor<'div'>> = props => (
  <div
    {...glamor.css({
      height: 260,
      outline: '1px dashed lightblue',
      overflowX: 'auto',
      overflowY: 'none',
      width: 500
    })}
    {...props}
  />
)

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      {...glamor.css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      })}
      {...rest}
    />
  )
}

const defaultArgs = {
  children: <Filler />
}

export default {
  title: 'Components/Scrollable',
  component: Scrollable,
  decorators: [storyFn => <StoryGrid>{storyFn()}</StoryGrid>]
} as Meta

const Template: Story = args => {
  return (
    <>
      <ScrollableWithDefaults {...args} />
      <VanillaScroll {...args} />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const ContainerPadding = Template.bind({})
ContainerPadding.args = {
  ...defaultArgs,
  ...glamor.css({ padding: layout.spacingMedium })
}

export const ContentPadding = Template.bind({})
ContentPadding.args = {
  ...defaultArgs,
  children: <Filler {...glamor.css({ padding: layout.spacingMedium })} />
}

export const NoScrollNeeded = Template.bind({})
NoScrollNeeded.args = {
  ...defaultArgs,
  children: <P>hello world</P>
}

export const ExampleDynamicSizing: Story = () => {
  const initialHeight = 300
  const [height, setHeight] = React.useState(initialHeight)

  const expand = () => setHeight(prev => prev + 100)

  const collapse = () => {
    setHeight(prev => {
      const next = prev - 100
      return next < initialHeight ? initialHeight : next
    })
  }

  return (
    <ScrollableWithDefaults {...glamor.css({ height })}>
      <div {...glamor.css({ position: 'relative', paddingTop: 50 })}>
        <Filler {...glamor.css({ padding: layout.spacingMedium })} />

        <div
          {...glamor.css({
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

ExampleDynamicSizing.args = {
  ...defaultArgs
}

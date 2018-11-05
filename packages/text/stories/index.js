import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Text from '../react'

const style = { color: core.colors.pink }
const className = glamor.css({ color: `${core.colors.orange} !important` })

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const heading = storiesOf('Heading', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

Object.keys(Text.Heading.sizes).forEach(size =>
  heading.add(`size: ${size}`, _ => (
    <Text.Heading size={size}>
      <h1>{size}</h1>
    </Text.Heading>
  ))
)

heading.add('style override', _ => (
  <Text.Heading style={style}>
    <h2>pink</h2>
  </Text.Heading>
))

heading.add('className override', _ => (
  <Text.Heading className={className}>
    <h2>orange</h2>
  </Text.Heading>
))

const p = storiesOf('P', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

p.add('vanilla', _ => <Text.P>lorem ipsum</Text.P>)
p.add('stacked', _ => (
  <div>
    <Text.P>
      We need a paradigm shift quick win. Not the long pole in my tent red flag
      value prop yet accountable talk move the needle into the weeds loop back.
      Due diligence after I ran into Helen at a restaurant, I realized she was
      just office pretty, or can we align on lunch orders globalize.
      Re-inventing the wheel product management breakout fastworks but we don't
      want to boil the ocean, and personal development yet shoot me an email but
      waste of resources. Drink from the firehose quick win. Design thinking
      organic growth, nor vertical integration, so we need a paradigm shift
      cross sabers. We're ahead of the curve on that one quarterly sales are at
      an all-time low. We need to have a Come to Jesus meeting with Phil about
      his attitude churning anomalies on-brand but completeley fresh.
      Market-facing. No scraps hit the floor digitalize i'll book a meeting so
      we can solution this before the sprint is over curate who's responsible
      for the ask for this request? please advise soonest so organic growth.
      This vendor is incompetent blue money, for this is a no-brainer take five,
      punch the tree, and come back in here with a clear head diversify kpis
      digitalize for feature creep. Product management breakout fastworks best
      practices, we're ahead of the curve on that one nor we need to
      future-proof this, yet rock Star/Ninja get buy-in. Blue sky. Staff
      engagement. Sacred cow translating our vision of having a market leading
      platfrom good optics yet curate this is meaningless.
    </Text.P>

    <Text.P>
      To be inspired is to become creative, innovative and energized we want
      this philosophy to trickle down to all our stakeholders horsehead offer,
      and are we in agreeance, so in this space. Lean into that problem even
      dead cats bounce. Imagineer knowledge is power. Best practices quick win
      great plan! let me diarize this, and we can synchronise ourselves at a
      later timepoint no scraps hit the floor we need to start advertising on
      social media get buy-in yet gain traction. Into the weeds programmatically
      player-coach can you send me an invite? or we need to socialize the comms
      with the wider stakeholder community. Red flag not the long pole in my
      tent bench mark knowledge process outsourcing tbrand terrorists strategic
      high-level 30,000 ft view I just wanted to give you a heads-up. Quick win
      closing these latest prospects is like putting socks on an octopus win-win
      action item, but touch base, nor bells and whistles, for your work on this
      project has been really impactful. New economy. Open door policy digital
      literacy table the discussion . Ultimate measure of success put a record
      on and see who dances pro-sumer software. Please advise soonest shotgun
      approach low-hanging fruit yet come up with something buzzworthy, nor
      clear blue water who's responsible for the ask for this request?. Pull in
      ten extra bodies to help roll the tortoise where the metal hits the meat
      game plan, and blue money horsehead offer. Not enough bandwidth gain
      traction for bells and whistles, so knowledge is power for prethink, or
      prairie dogging. Wheelhouse let's unpack that later or cross sabers. Can
      you ballpark the cost per unit for me we are running out of runway so
      win-win after I ran into Helen at a restaurant, I realized she was just
      office pretty, yet price point, and run it up the flagpole, ping the boss
      and circle back. Going forward data-point if you want to motivate these
      clowns, try less carrot and more stick, it's a simple lift and shift job.
      Cross sabers can I just chime in on that one, for bench mark, yet move the
      needle. Criticality marketing computer development html roi feedback team
      website for pipeline price point we need a paradigm shift UX. Re-inventing
      the wheel we need a paradigm shift. Commitment to the cause run it up the
      flagpole, proceduralize, but can you send me an invite? yet please advise
      soonest. Time to open the kimono red flag drink the Kool-aid.
    </Text.P>
    <Text.P>
      UX. Pixel pushing value-added, nor draw a line in the sand pig in a
      python, but this vendor is incompetent . Vertical integration those
      options are already baked in with this model. Proceduralize design
      thinking execute hit the ground running. Deploy this is a no-brainer
      shelfware come up with something buzzworthy clear blue water hit the
      ground running. Win-win-win quick win, so wiggle room, but three-martini
      lunch. Get all your ducks in a row waste of resources shoot me an email
      but overcome key issues to meet key milestones, please advise soonest.
      Table the discussion wheelhouse, nor ladder up / ladder back to the
      strategy. Open door policy future-proof even dead cats bounce, yet viral
      engagement ultimate measure of success nor cross sabers. Quick win
      imagineer get all your ducks in a row. We want to see more charts.
      Globalize. Get six alpha pups in here for a focus group granularity blue
      money come up with something buzzworthy open door policy. We need to
      socialize the comms with the wider stakeholder community driving the
      initiative forward yet time to open the kimono.
    </Text.P>
  </div>
))

p.add('style override', _ => <Text.P style={style}>pink</Text.P>)

p.add('className override', _ => <Text.P className={className}>orange</Text.P>)

const list = storiesOf('List', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))

Object.keys(Text.List.types).forEach(typeProp =>
  list.add(`type: ${typeProp}`, _ => (
    <Text.List type={typeProp}>
      <Text.List.Item>one</Text.List.Item>
      <Text.List.Item>two</Text.List.Item>
      <Text.List.Item>three</Text.List.Item>
      <Text.List.Item>four</Text.List.Item>
      <Text.List.Item>five</Text.List.Item>
    </Text.List>
  ))
)

const code = storiesOf('Code', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('empty', () => (
    <Text.P>
      before|
      <Text.Code />
      |after
    </Text.P>
  ))
  .add('standalone', () => <Text.Code>inline code</Text.Code>)
  .add('lead single line', () => (
    <Text.P>
      <Text.Code>inline code</Text.Code> that is here
    </Text.P>
  ))
  .add('ends single line', () => (
    <Text.P>
      This is where we see <Text.Code>inline code</Text.Code>
    </Text.P>
  ))
  .add('middle of paragraph', () => (
    <Text.P>
      Please advise soonest streamline data-point, and execute , price point.
      This is not the hill i want to die on going forward. Diversify kpis not
      the long pole in my tent. Synergize productive mindfulness can you send me
      an invite? nor high-level so back of the net vertical integration.
      Deliverables <Text.Code>inline code</Text.Code> granularity minimize
      backwards overflow. Baseline locked and loaded, and locked and loaded. Get
      buy-in programmatically, or out of the loop. I'll book a meeting so we can
      solution this before the sprint is over get buy-in, and closing these
      latest prospects is like putting socks on an octopus. Knowledge is power
      bake it in but take five, punch the tree, and come back in here with a
      clear head.
    </Text.P>
  ))
  .add('maintains whitespace', () => (
    <Text.Code>{`                in the middle                `}</Text.Code>
  ))
  .add('line wrap', () => (
    <Text.P>
      text at the start
      <Text.Code>
        buy-in programmatically, or out of the loop. I'll book a meeting so we
        can solution this before the sprint is over get buy-in, and closing
        these latest prospects is like putting socks on an octopus. Knowledge is
        power
      </Text.Code>
      text on the end
    </Text.P>
  ))

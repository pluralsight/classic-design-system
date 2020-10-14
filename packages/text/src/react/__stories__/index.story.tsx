import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'

import List from '../list'
import Code from '../code'
import Heading from '../heading'
import P from '../p'

const style = { color: core.colorsPink.base }
const className = glamor.css({ color: `${core.colorsBlue.base} !important` })

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const heading = storiesOf('Heading', module).addDecorator(PaddingDecorator)
Object.keys(Heading.sizes).forEach(size =>
  heading.add(`size: ${size}`, () => (
    <Heading size={size as keyof typeof Heading.sizes}>
      <h1>{size}</h1>
    </Heading>
  ))
)
heading.add('style override', () => (
  <Heading style={style}>
    <h2>pink</h2>
  </Heading>
))
heading.add('className override', () => (
  <Heading className={(className as unknown) as string}>
    <h2>orange</h2>
  </Heading>
))

storiesOf('P', module)
  .addDecorator(PaddingDecorator)
  .add('vanilla', () => <P>lorem ipsum</P>)
  .add('stacked', () => (
    <div>
      <P>
        We need a paradigm shift quick win. Not the long pole in my tent red
        flag value prop yet accountable talk move the needle into the weeds loop
        back. Due diligence after I ran into Helen at a restaurant, I realized
        she was just office pretty, or can we align on lunch orders globalize.
        Re-inventing the wheel product management breakout fastworks but we
        don't want to boil the ocean, and personal development yet shoot me an
        email but waste of resources. Drink from the firehose quick win. Design
        thinking organic growth, nor vertical integration, so we need a paradigm
        shift cross sabers. We're ahead of the curve on that one quarterly sales
        are at an all-time low. We need to have a Come to Jesus meeting with
        Phil about his attitude churning anomalies on-brand but completeley
        fresh. Market-facing. No scraps hit the floor digitalize i'll book a
        meeting so we can solution this before the sprint is over curate who's
        responsible for the ask for this request? please advise soonest so
        organic growth. This vendor is incompetent blue money, for this is a
        no-brainer take five, punch the tree, and come back in here with a clear
        head diversify kpis digitalize for feature creep. Product management
        breakout fastworks best practices, we're ahead of the curve on that one
        nor we need to future-proof this, yet rock Star/Ninja get buy-in. Blue
        sky. Staff engagement. Sacred cow translating our vision of having a
        market leading platfrom good optics yet curate this is meaningless.
      </P>
      <P>
        To be inspired is to become creative, innovative and energized we want
        this philosophy to trickle down to all our stakeholders horsehead offer,
        and are we in agreeance, so in this space. Lean into that problem even
        dead cats bounce. Imagineer knowledge is power. Best practices quick win
        great plan! let me diarize this, and we can synchronise ourselves at a
        later timepoint no scraps hit the floor we need to start advertising on
        social media get buy-in yet gain traction. Into the weeds
        programmatically player-coach can you send me an invite? or we need to
        socialize the comms with the wider stakeholder community. Red flag not
        the long pole in my tent bench mark knowledge process outsourcing tbrand
        terrorists strategic high-level 30,000 ft view I just wanted to give you
        a heads-up. Quick win closing these latest prospects is like putting
        socks on an octopus win-win action item, but touch base, nor bells and
        whistles, for your work on this project has been really impactful. New
        economy. Open door policy digital literacy table the discussion .
        Ultimate measure of success put a record on and see who dances pro-sumer
        software. Please advise soonest shotgun approach low-hanging fruit yet
        come up with something buzzworthy, nor clear blue water who's
        responsible for the ask for this request?. Pull in ten extra bodies to
        help roll the tortoise where the metal hits the meat game plan, and blue
        money horsehead offer. Not enough bandwidth gain traction for bells and
        whistles, so knowledge is power for prethink, or prairie dogging.
        Wheelhouse let's unpack that later or cross sabers. Can you ballpark the
        cost per unit for me we are running out of runway so win-win after I ran
        into Helen at a restaurant, I realized she was just office pretty, yet
        price point, and run it up the flagpole, ping the boss and circle back.
        Going forward data-point if you want to motivate these clowns, try less
        carrot and more stick, it's a simple lift and shift job. Cross sabers
        can I just chime in on that one, for bench mark, yet move the needle.
        Criticality marketing computer development html roi feedback team
        website for pipeline price point we need a paradigm shift UX.
        Re-inventing the wheel we need a paradigm shift. Commitment to the cause
        run it up the flagpole, proceduralize, but can you send me an invite?
        yet please advise soonest. Time to open the kimono red flag drink the
        Kool-aid.
      </P>
      <P>
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
      </P>
    </div>
  ))
  .add('style override', () => <P style={style}>pink</P>)
  .add('className override', () => <P className={(className as unknown) as string}>orange</P>)

const list = storiesOf('List', module)
  .addDecorator(PaddingDecorator)
  .add('mixed liste', () => (
    <div>
      <List type="bulleted">
        <List.Item>one</List.Item>
        <List.Item>two</List.Item>
        <List.Item>
          <List type="numbered">
            <List.Item>one</List.Item>
            <List.Item>two</List.Item>
            <List.Item>three</List.Item>
            <List.Item>
              <List>
                <List.Item>one</List.Item>
                <List.Item>two</List.Item>
                <List.Item>three</List.Item>
                <List.Item>four</List.Item>
                <List.Item>five</List.Item>
              </List>
            </List.Item>
            <List.Item>five</List.Item>
          </List>
        </List.Item>
        <List.Item>four</List.Item>
        <List.Item>five</List.Item>
      </List>
      <List style={{ marginTop: 50 }}>
        <List.Item>one</List.Item>
        <List.Item>two</List.Item>
        <List.Item>
          <List type="bulleted">
            <List.Item>one</List.Item>
            <List.Item>two</List.Item>
            <List.Item>
              <List type="numbered">
                <List.Item>one</List.Item>
                <List.Item>two</List.Item>
                <List.Item>three</List.Item>
                <List.Item>four</List.Item>
                <List.Item>five</List.Item>
              </List>
            </List.Item>
            <List.Item>four</List.Item>
            <List.Item>five</List.Item>
          </List>
        </List.Item>
        <List.Item>four</List.Item>
        <List.Item>five</List.Item>
      </List>
    </div>
  ))
Object.keys(List.types).forEach(typeProp =>
  list.add(`type: ${typeProp}`, () => (
    <List type={typeProp as keyof typeof List.types}>
      <List.Item>one</List.Item>
      <List.Item>two</List.Item>
      <List.Item>three</List.Item>
      <List.Item>four</List.Item>
      <List.Item>five</List.Item>
    </List>
  ))
)

storiesOf('Code', module)
  .addDecorator(PaddingDecorator)
  .add('empty', () => (
    <P>
      before|
      <Code />
      |after
    </P>
  ))
  .add('standalone', () => <Code>inline code</Code>)
  .add('lead single line', () => (
    <P>
      <Code>inline code</Code> that is here
    </P>
  ))
  .add('ends single line', () => (
    <P>
      This is where we see <Code>inline code</Code>
    </P>
  ))
  .add('middle of paragraph', () => (
    <P>
      Please advise soonest streamline data-point, and execute , price point.
      This is not the hill i want to die on going forward. Diversify kpis not
      the long pole in my tent. Synergize productive mindfulness can you send me
      an invite? nor high-level so back of the net vertical integration.
      Deliverables <Code>inline code</Code> granularity minimize backwards
      overflow. Baseline locked and loaded, and locked and loaded. Get buy-in
      programmatically, or out of the loop. I'll book a meeting so we can
      solution this before the sprint is over get buy-in, and closing these
      latest prospects is like putting socks on an octopus. Knowledge is power
      bake it in but take five, punch the tree, and come back in here with a
      clear head.
    </P>
  ))
  .add('maintains whitespace', () => <Code> in the middle </Code>)
  .add('line wrap', () => (
    <P>
      text at the start
      <Code>
        buy-in programmatically, or out of the loop. I'll book a meeting so we
        can solution this before the sprint is over get buy-in, and closing
        these latest prospects is like putting socks on an octopus. Knowledge is
        power
      </Code>
      text on the end
    </P>
  ))

import * as core from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'
import PropTypes from 'prop-types'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'
import Button from '@pluralsight/ps-design-system-button'

import {
  Chrome,
  Content,
  Intro,
  Link,
  Guideline,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const Divider = _ => (
  <div className="divider">
    <style jsx>{`
      .divider {
        height: 1px;
        margin-top: ${core.layout.spacingXLarge};
        border-bottom: 1px solid ${core.colorsBorder.lowOnDark};
      }
    `}</style>
  </div>
)

const ExampleHeader = props => (
  <header>
    <h3 className="header">{props.children}</h3>
    <style jsx>{`
      .header {
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </header>
)
ExampleHeader.propTypes = {
  children: PropTypes.node
}

const PrincipleHeader = props => (
  <header className="header">
    <h2 className="title">{props.children}</h2>
    <div className="bar" />
    <style jsx>{`
      .header {
        display: inline-block;
      }
      .title {
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
        padding-right: ${core.layout.spacingLarge};
        margin-bottom: ${core.layout.spacingXXSmall};
      }
      .bar {
        display: block;
        width: 100%;
        height: 4px;
        background: ${core.colorsGradient.skillsBackground};
      }
    `}</style>
  </header>
)
PrincipleHeader.propTypes = {
  children: PropTypes.node
}

const QuoteBox = props => (
  <div
    className="quote"
    style={
      props.children.length > 50
        ? { fontSize: core.type.fontSizeSmall }
        : { fontSize: core.type.fontSizeMedium }
    }
    {...props}
  >
    <div className="openquote">“</div>
    <div className="closequote">”</div>
    {props.children}
    <style jsx>{`
      .quote {
        position: relative;
        background: ${core.colorsBackgroundLight[2]};
        padding: ${core.layout.spacingLarge} ${core.layout.spacingXLarge};
        border-radius: 12px;
        line-height: ${core.type.lineHeightStandard};
        font-weight: ${core.type.fontWeightMedium};
        color: ${core.colorsTextIcon.highOnLight};
      }
      .openquote,
      .closequote {
        position: absolute;
        color: #e5e5e5;
        font-family: Georgia, serif;
        font-size: ${core.type.fontSizeGigantic};
        line-height: 1em;
      }
      .openquote {
        top: 8px;
        left: 8px;
      }
      .closequote {
        right: 8px;
        bottom: -24px;
      }
    `}</style>
  </div>
)
QuoteBox.propTypes = {
  children: PropTypes.node
}

export default _ => (
  <Chrome>
    <Content title="Voice & tone">
      <PageHeading>Voice & tone</PageHeading>

      <Intro>
        Our writing voice is friendly, as if you’re speaking to a relative or
        colleague. We don’t want to come across as stuffy or as if we’re talking
        down to our reader, but we do want to come across as credible and
        knowledgeable. This does not mean that you should forgo basic style
        guidelines. But, it does mean that you shouldn’t be afraid to start a
        sentence with conjunctions like “but” or “and.” You should also use
        contractions (didn’t, don’t, haven’t, hadn’t) freely.
      </Intro>
      <Intro>
        We follow three principles in our messaging: Be confident. Be
        enthusiastic. Be clever.
      </Intro>
      <EqualColumnLayout
        count={EqualColumnLayout.counts.three}
        style={{ marginTop: core.layout.spacingXXLarge }}
      >
        <div>
          <PrincipleHeader>Confident</PrincipleHeader>
          <P>
            Be simple and direct. Avoid long, hard words and formal language.
            Try not to say too many things at once. Avoid hedging language and
            evasive phrases such as “seems like” and “according to.” Steer clear
            of empty words like “world class,” “robust” and “high quality.”
          </P>
        </div>
        <div>
          <PrincipleHeader>Enthusiastic</PrincipleHeader>
          <P>
            Stay positive by avoiding comparisons designed to elevate one idea
            by diminishing another. Assume success and stay away from fear.
            Celebrate the craft. Our audience appreciates the skill that goes
            into their work, so shine light on it whenever possible.
          </P>
        </div>
        <div>
          <PrincipleHeader>Clever</PrincipleHeader>
          <P>
            Show our audience you relate to their joys and frustrations. That
            you know they have interests outside of work. Infuse your writing
            with the unexpected and engage in wordplay but not at the expense of
            being clear. At times, be light-hearted but not light-headed.
          </P>
        </div>
      </EqualColumnLayout>

      <Divider />

      <SectionHeading>Point of view</SectionHeading>
      <P>
        Do write in{' '}
        <Link
          target="_blank"
          appearance={Link.appearances.subtle}
          href="https://en.wikipedia.org/wiki/Narration#Second-person"
        >
          second person
        </Link>
        , meaning address the audience as “you,” “your,” etc. We talk to our
        audience directly, addressing them as “you” not as “one,” “persons,”
        etc. (We want to avoid phrases like this: “To take a skill assessment,
        one needs to select…”) This language feels formal and unnatural.
      </P>
      <P>
        Exception: When writing copy for interactive challenges, write in the
        first-person-plural point of view instead. We write in this way to be
        more inclusive and encouraging to the learner. To show that we're on
        this learning journey with them. Read more in the{' '}
        <Link
          appearance={Link.appearances.subtle}
          href="https://github.com/ps-dev/interactive-courses/wiki/Challenge-Writing-Styleguide"
          target="_blank"
        >
          challenge writing styleguide
        </Link>
        .
      </P>

      <Divider />

      <SectionHeading>Capitalization & punctuation</SectionHeading>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <P>
          <ExampleHeader>Headlines</ExampleHeader>
          Write headlines in sentence case, meaning only capitalize the first
          word and any proper nouns.
        </P>
        <QuoteBox>Measure your skills</QuoteBox>
        <P>Only punctuate a headline when it uses more than one sentence.</P>
        <QuoteBox>Measure your skills. Learn something new. </QuoteBox>
        <P>
          <ExampleHeader>Commas</ExampleHeader>
          We do not use a serial comma, a comma in front of the conjunction
          connecting list items.
        </P>
        <QuoteBox>
          At Pluralsight we are big fans of pizza, Indian and Chinese food.
        </QuoteBox>
        <P>
          Exception: We do use a serial comma when the phrase before the
          conjunction also has a conjunction or if the phrases separated by the
          commas will be less confusing if commas are used throughout.
        </P>
        <QuoteBox>
          While studying for certifications, it’s important to use flash cards,
          practice tests, online or instructor-led training, and study guides.
        </QuoteBox>
      </EqualColumnLayout>
      <P>
        <ExampleHeader>Exclamation points</ExampleHeader>
        Avoid over-using exclamation points, unless offering congratulations on
        having completed a complex flow. Exclamation points aren’t a substitute
        for creating excitement.
      </P>

      <Divider />

      <SectionHeading>Buttons, links and other actions</SectionHeading>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <P>
          Buttons should always be clear, direct and actionable. A link should
          be descriptive of the place it's taking the user. Do not use text such
          as ‘click here’, or anything that does not make sense when read out of
          context.
        </P>
        <QuoteBox>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
              <Text.List.Item>Learn now</Text.List.Item>
              <Text.List.Item>Get started</Text.List.Item>
              <Text.List.Item>Get your IQ</Text.List.Item>
            </Text.List>
            <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
              <Text.List.Item>Watch a course</Text.List.Item>
              <Text.List.Item>Start a path</Text.List.Item>
              <Text.List.Item>Tell us more</Text.List.Item>
            </Text.List>
          </div>
        </QuoteBox>
      </EqualColumnLayout>

      <Divider />

      <SectionHeading>Error messages</SectionHeading>
      <P>
        Do all you can to prevent errors, but when they occur, use the
        opportunity to help users understand what happened and how to get
        through it. Follow these 3 guidelines when writing error messages:
      </P>

      <P
        style={{
          marginTop: core.layout.spacingXLarge
        }}
      >
        <ExampleHeader>1. Explain what happened and why</ExampleHeader>
        Be clear about what’s going on. Give the right amount of detail, but
        don’t get too technical. Write in a way that anyone could easily
        understand without using jargon.
      </P>

      <Guideline
        do={
          <div style={{ textAlign: 'center' }}>
            <strong>Your credit card has expired</strong> <br />
            Update your payment method to restore your subscription.
          </div>
        }
        dont={
          <div style={{ textAlign: 'center' }}>
            <strong>Billing error</strong>
          </div>
        }
      />

      <P
        style={{
          marginTop: core.layout.spacingXLarge
        }}
      >
        <ExampleHeader>2. Suggest a next step</ExampleHeader>
        After you explain what happened, tell the user what they can do to
        resolve the issue. If possible include a button, a link, or another call
        to action.
      </P>

      <Guideline
        do={
          <div style={{ textAlign: 'center' }}>
            <strong>There was a problem loading the video</strong> <br />
            <br />
            <Button appearance={Button.appearances.primary}>Try again</Button>
          </div>
        }
        dont={
          <div style={{ textAlign: 'center' }}>
            <strong>Error 7007</strong>
            <br />
            Unable to play video
          </div>
        }
      />

      <P
        style={{
          marginTop: core.layout.spacingXLarge
        }}
      >
        <ExampleHeader>3. Match the tone to the context</ExampleHeader>
        Avoid being robotic or silly. Remember, something went wrong, now's your
        time to help them through it in a friendly way.
      </P>

      <Guideline
        do={
          <div style={{ textAlign: 'center' }}>
            That password doesn’t match. Try again?
          </div>
        }
        dont={
          <div style={{ textAlign: 'center' }}>
            Yo, big problemo! The password you provided doesn’t match. Wanna try
            that again?
          </div>
        }
      />

      <Divider />

      <SectionHeading>Formatting</SectionHeading>
      <EqualColumnLayout count={EqualColumnLayout.counts.two}>
        <P>
          <ExampleHeader>Time</ExampleHeader>
          Follow AP conventions, only listing a.m. or p.m. on one of the times
          unless the time spans both a.m. and p.m. Drop :00 from any times that
          start at the hour. Use noon or midnight vs. 12 a.m. and 12 p.m.
        </P>
        <QuoteBox>
          <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
            <Text.List.Item>10:30 a.m.–1 p.m.</Text.List.Item>
            <Text.List.Item>Noon–3 p.m.</Text.List.Item>
            <Text.List.Item>1–5:30 p.m.</Text.List.Item>
          </Text.List>
        </QuoteBox>
        <P>
          <ExampleHeader>Dates</ExampleHeader>
          Do not use contractions (st, th, etc.) within a complete sentence. Do
          not use leading zeros on days. Feel free to abbreviate months. Use
          four digit year.
        </P>
        <QuoteBox>
          <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
            <Text.List.Item>On May 15, Microsoft announced…</Text.List.Item>
            <Text.List.Item>Jan 23, 2017</Text.List.Item>
            <Text.List.Item>Jan 2017</Text.List.Item>
          </Text.List>
        </QuoteBox>
        <P>
          <ExampleHeader>Numbers</ExampleHeader>
          For numerals over 999, insert a comma for clarity.
        </P>
        <QuoteBox>1,643</QuoteBox>
        <P>
          <ExampleHeader>Duration</ExampleHeader>
          When listing duration of long content, round to the nearest hour or
          minute, with no leading zeros. For approximate durations, round to
          nearest appropriate value. For short and exact duration, display
          standard time format, no leading zeros.
        </P>
        <QuoteBox>
          <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
            <Text.List.Item>23h 8m</Text.List.Item>
            <Text.List.Item>23h </Text.List.Item>
            <Text.List.Item>About 1 hour</Text.List.Item>
            <Text.List.Item>About 30 minutes</Text.List.Item>
            <Text.List.Item>4:54</Text.List.Item>
          </Text.List>
        </QuoteBox>
        <P>
          <ExampleHeader>Names</ExampleHeader>
          When listing a single author or owner, display full name. If listing
          multiple and space is limited, abbreviating to last name only is
          acceptable. Do not use “By” in the beginning of an author(s) string.
        </P>
        <QuoteBox>
          <Text.List style={{ color: core.colorsTextIcon.highOnLight }}>
            <Text.List.Item>Gary Eimerman</Text.List.Item>
            <Text.List.Item>Gary Eimerman, Troy Hunt </Text.List.Item>
            <Text.List.Item>Eimerman, Hunt</Text.List.Item>
            <Text.List.Item>
              Gary Eimerman, Troy Hunt, Lars Klint
            </Text.List.Item>
            <Text.List.Item>Eimerman, +2</Text.List.Item>
          </Text.List>
        </QuoteBox>
      </EqualColumnLayout>
    </Content>
  </Chrome>
)

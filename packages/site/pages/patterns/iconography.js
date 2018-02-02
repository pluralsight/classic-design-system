import core from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'

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

const Purpose = props => (
  <div className="purpose">
    {props.children}
    <style jsx>{`
      .purpose {
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightXLight};
      }
    `}</style>
  </div>
)

const Boxes = props => (
  <div className="boxes">
    <EqualColumnLayout count={props.count || EqualColumnLayout.counts.three}>
      {React.Children.map(props.children, child => (
        <div className="box">{child}</div>
      ))}
    </EqualColumnLayout>
    <style jsx>{`
      .boxes {
        margin: ${core.layout.spacingLarge} 0;
      }
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${core.colors.bone};
        border-radius: 12px;
        padding: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Iconography">
      <PageHeading>Iconography</PageHeading>

      <Purpose>
        Create custom icons based on the following guidelines to yield a
        consistent style. Propose your icons be included in the{' '}
        <Link href="/components/icon/#common-icon-set">common set</Link> by
        adding an{' '}
        <Link href="https://github.com/pluralsight/design-system/issues/new">
          issue in Github
        </Link>. For implementation instructions, visit the{' '}
        <Link href="/components/icon">Icon component page</Link>.
      </Purpose>

      <SectionHeading>Canvas Size, Padding, Live Area</SectionHeading>
      <Boxes>
        <img
          src="/static/img/patterns/iconography/canvas-size.svg"
          alt="Canvas size visual"
        />
        <img
          src="/static/img/patterns/iconography/canvas-padding.svg"
          alt="Padding visual"
        />
        <img
          src="/static/img/patterns/iconography/canvas-live-area.svg"
          alt="Live area visual"
        />
      </Boxes>

      <SectionHeading>Keyline shapes</SectionHeading>
      <P>Sizes for basic shapes.</P>
      <Boxes count={EqualColumnLayout.counts.four}>
        <img
          src="/static/img/patterns/iconography/keyline-shapes-horizontal-rectangle.svg"
          alt="Keyline shape horizontal rectangle visual"
        />
        <img
          src="/static/img/patterns/iconography/keyline-shapes-vertical-rectangle.svg"
          alt="Keyline shape vertical rectangle visual"
        />
        <img
          src="/static/img/patterns/iconography/keyline-shapes-square.svg"
          alt="Keyline shape square visual"
        />
        <img
          src="/static/img/patterns/iconography/keyline-shapes-circle.svg"
          alt="Keyline shape circle visual"
        />
      </Boxes>

      <SectionHeading>Examples</SectionHeading>
      <P>
        2px strokes. Use right angles as often as possible. Round large exterior
        corners to 1px, Round small exterior corners & stroke terminals to
        0.5px. Use right angles when possible.
      </P>
      <Boxes>
        <img
          src="/static/img/patterns/iconography/example-1.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-2.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-3.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-4.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-5.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-6.svg"
          alt="A proper icon example"
        />
        <img
          src="/static/img/patterns/iconography/example-7.svg"
          alt="A proper icon example"
        />
      </Boxes>

      <SectionHeading>Things to avoid</SectionHeading>
      <P>What not to do when designing icons for the design system.</P>
      <Boxes>
        <img
          src="/static/img/patterns/iconography/avoid-1.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-2.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-3.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-4.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-5.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-6.svg"
          alt="An icon example to avoid"
        />
        <img
          src="/static/img/patterns/iconography/avoid-7.svg"
          alt="An icon example to avoid"
        />
      </Boxes>
    </Content>
  </Chrome>
))

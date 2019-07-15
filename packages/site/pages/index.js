import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Robot from '../src/ui/robot'

import {
  Chrome,
  Content,
  Heading,
  Link,
  P,
  TextLink,
  TitleLogo,
  withServerProps
} from '../src/ui'

const Point = props => (
  <div className="point">
    <Heading size={Heading.sizes.large} className="pointTitle">
      <h2>{props.title}</h2>
    </Heading>
    <P>{props.children}</P>
    <style jsx>{`
      .point {
        margin-bottom: 44px;
      }
      @media screen and (min-width: 769px) {
        .point {
          margin-bottom: 24px;
        }
        .point + .point {
          margin-left: ${core.layout.spacingLarge};
        }
      }
      .group {
      }
    `}</style>
  </div>
)

const Action = props => (
  <span className="action">
    <Link href={props.href}>
      <Button appearance="stroke" size="large">
        {props.children}
      </Button>
    </Link>
    <style jsx>{`
      .action {
        display: block;
        margin-bottom: 44px;
      }
      .action :global(a) {
        text-decoration: none;
      }
    `}</style>
  </span>
)

const Header = props => (
  <header className="header">
    <div className="title">
      <TitleLogo />
    </div>
    <style jsx>{`
      .header {
        display: none;
      }
      @media screen and (min-width: 769px) {
        .header {
          background: linear-gradient(to top, #2bb2e3, #137bc2);
          height: 178px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
        }
        .title {
          display: flex;
          align-items: center;
          color: ${core.colors.white};
          margin: auto;
          margin-right: auto;
          padding: 0 ${core.layout.spacingLarge};
          width: 100%;
          text-align: left;

          max-width: 900px;
          min-width: 300px;
        }
      }
    `}</style>
  </header>
)

export default withServerProps(_ => (
  <Chrome>
    <Header />
    <Content title="Welcome">
      <div className="points">
        <Point title="Purpose">
          The Design System strives toward a cohesive design language for
          Pluralsight’s products, a shared vocabulary for our teams, and basic
          building blocks to accelerate development.
        </Point>
        <Point title="Core">
          The Core consists of predefined variables for basic design elements
          such as <TextLink href="/core/color">color</TextLink>,{' '}
          <TextLink href="/core/typography">typography</TextLink>, and{' '}
          <TextLink href="/core/spacing">spacing</TextLink>. These system
          properties allow for building layouts and visual styles from defined
          constraints.
        </Point>
        <Point title="Components">
          Components include a variety of common UI elements to bootstrap
          experiences and ensure consistent interaction and style as well as
          accessibility optimizations. These are React components.
        </Point>
      </div>
      <Action href="/install">Install the Design System</Action>
      <Action href="https://github.com/pluralsight/design-system">
        View on Github
      </Action>
    </Content>
    <Robot />
    <style jsx>{`
      @media screen and (min-width: 769px) {
        .points {
          display: flex;
        }
      }
    `}</style>
  </Chrome>
))

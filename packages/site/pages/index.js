import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Chrome from '../src/ui/chrome'
import Robot from '../src/ui/robot'
import styleable from 'react-styleable'

import { Content, Heading, Link, P, TextLink } from '../src/ui'

const Point = props =>
  <div className="point">
    <Heading size="large" className="pointTitle">
      <h2>{props.title}</h2>
    </Heading>
    <P>
      {props.children}
    </P>
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

const Action = props =>
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

const Logo = _ =>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C5.3723 24 0 18.627 0 12.0005 0 5.373 5.3728 0 12 0c6.6277 0 12.0005 5.373 12 12.0005C24 18.627 18.6277 24 12 24zm0-1.0313c6.0582 0 10.9688-4.9112 10.9688-10.9682C22.969 5.9425 18.0582 1.0312 12 1.0312c-6.0577 0-10.9688 4.9113-10.9688 10.9693 0 6.057 4.9106 10.9682 10.9688 10.9682zM8.9062 8.5334V5.7187L19.6876 12 8.9062 18.2813v-2.8146L6.4688 16.875v-9.75l2.4375 1.4083zm0 1.191L7.5 8.9118v6.1763l1.4063-.8123V9.7243zm1.0313.596V13.68L12.845 12l-2.9075-1.6798zm0 4.5505v1.616L17.639 12 9.9374 7.513v1.616L14.9064 12l-4.969 2.8708z" />
  </svg>

const Title = props =>
  <svg
    className="titleSvg"
    viewBox="0 0 486 56"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Pluralsight Design System</title>
    <g fill="#FFF" fillRule="evenodd">
      <path d="M106.16 45.72c-8.64 0-15.9-6.72-15.9-16.68v-.12c0-9.3 6.54-16.74 15.3-16.74 9.24 0 14.88 7.5 14.88 16.92 0 .6 0 .84-.12 1.44H94.4c.66 7.38 5.94 11.64 11.88 11.64 4.62 0 7.86-2.04 10.5-4.8l2.58 2.34c-3.24 3.54-7.14 6-13.2 6zM94.4 27.3h21.84c-.48-6.12-3.96-11.58-10.8-11.58-5.94 0-10.44 4.92-11.04 11.58zm44.88 18.3c6.3 0 11.28-3.54 11.28-9.48V36c0-5.7-5.4-7.62-10.44-9.12-4.44-1.26-8.58-2.52-8.58-5.82v-.12c0-2.94 2.64-5.1 6.72-5.1 3.18 0 6.66 1.26 9.66 3.18l1.92-3.12c-3.24-2.22-7.62-3.6-11.46-3.6-6.3 0-10.74 3.72-10.74 9.12v.12c0 5.76 5.64 7.44 10.74 8.94 4.32 1.2 8.22 2.46 8.22 5.94v.12c0 3.36-3.06 5.52-7.14 5.52-3.9 0-7.74-1.44-11.28-4.14l-2.16 3c3.54 2.88 8.64 4.68 13.26 4.68zm20.34-40.26h4.74V.48h-4.74v4.86zm.36 39.66H164V12.96h-4.02V45zm29.22-6.12c6.3 0 12.42-4.62 12.42-11.46v-.12c0-6.9-6.12-11.4-12.42-11.4-6.36 0-11.7 4.38-11.7 11.4v.12c0 6.78 5.46 11.46 11.7 11.46zm.18 16.2c-5.28 0-10.26-1.56-14.64-4.62l2.04-3.18c3.78 2.76 7.98 4.26 12.66 4.26 7.14 0 12-4.02 12-11.88v-4.14c-2.76 3.84-6.78 7.08-12.9 7.08-7.74 0-15.24-5.88-15.24-15.12v-.12c0-9.3 7.56-15.18 15.24-15.18 6.18 0 10.26 3.24 12.9 6.84v-6.06h4.02v26.7c0 4.86-1.5 8.58-4.08 11.16-2.82 2.82-7.02 4.26-12 4.26zM216.32 45h4.02V26.58c0-6.3 4.44-10.68 10.26-10.68 6 0 9.48 3.96 9.48 10.26V45h4.02V25.2c0-7.62-4.62-13.02-12.54-13.02-5.64 0-9.12 2.88-11.22 6.48v-5.7h-4.02V45zm72.06.6c8.58 0 14.76-4.86 14.76-12.12v-.12c0-6.6-4.38-10.14-14.28-12.24-9.96-2.1-12.24-4.62-12.24-8.94v-.12c0-4.2 3.9-7.62 9.9-7.62 4.62 0 8.7 1.44 12.78 4.86l2.52-3.24C297.38 2.46 293 .72 286.64.72c-8.22 0-14.22 4.98-14.22 11.7v.12c0 6.96 4.44 10.32 14.7 12.48 9.54 1.98 11.82 4.44 11.82 8.7v.12c0 4.68-4.2 8.04-10.32 8.04-6.24 0-10.62-2.1-15.3-6.36l-2.64 3.12c5.22 4.68 10.8 6.96 17.7 6.96zm36.72-5.04l-12.42-27.6h-4.5l14.94 31.92c-2.16 4.98-4.14 6.66-7.2 6.66-2.16 0-3.6-.42-5.22-1.2l-1.38 3.3c2.16 1.02 4.08 1.56 6.66 1.56 4.68 0 7.86-2.4 10.62-9.12l13.68-33.12h-4.38l-10.8 27.6zm32.1 5.04c6.3 0 11.28-3.54 11.28-9.48V36c0-5.7-5.4-7.62-10.44-9.12-4.44-1.26-8.58-2.52-8.58-5.82v-.12c0-2.94 2.64-5.1 6.72-5.1 3.18 0 6.66 1.26 9.66 3.18l1.92-3.12c-3.24-2.22-7.62-3.6-11.46-3.6-6.3 0-10.74 3.72-10.74 9.12v.12c0 5.76 5.64 7.44 10.74 8.94 4.32 1.2 8.22 2.46 8.22 5.94v.12c0 3.36-3.06 5.52-7.14 5.52-3.9 0-7.74-1.44-11.28-4.14l-2.16 3c3.54 2.88 8.64 4.68 13.26 4.68zm30.36-.06c2.22 0 3.84-.42 5.52-1.2v-3.6c-1.74.78-3.06 1.14-4.68 1.14-3.42 0-5.82-1.56-5.82-5.76V16.56h10.68v-3.6h-10.68V3h-4.02v9.96H374v3.6h4.56V36.6c0 6.36 3.96 8.94 9 8.94zm26.94.18c-8.64 0-15.9-6.72-15.9-16.68v-.12c0-9.3 6.54-16.74 15.3-16.74 9.24 0 14.88 7.5 14.88 16.92 0 .6 0 .84-.12 1.44h-25.92c.66 7.38 5.94 11.64 11.88 11.64 4.62 0 7.86-2.04 10.5-4.8l2.58 2.34c-3.24 3.54-7.14 6-13.2 6zM402.74 27.3h21.84c-.48-6.12-3.96-11.58-10.8-11.58-5.94 0-10.44 4.92-11.04 11.58zM437.12 45h4.02V26.58c0-6.12 4.14-10.68 9.48-10.68 5.4 0 8.76 3.78 8.76 10.08V45h4.02V26.46c0-6.72 4.32-10.56 9.42-10.56 5.52 0 8.82 3.72 8.82 10.26V45h4.02V25.32c0-7.98-4.62-13.14-12.12-13.14-5.76 0-9.18 3.12-11.4 6.66-1.74-3.66-5.16-6.66-10.5-6.66-5.58 0-8.46 3.06-10.5 6.3v-5.52h-4.02V45zM23 46C10.297 46 0 35.7017 0 23.001 0 10.2983 10.2978 0 23 0c12.703 0 23.001 10.2983 23 23.001C46 35.7017 35.703 46 23 46zm-5.9297-29.6445l-4.672-2.6992v18.6874l4.672-2.6993v5.3947L37.7343 23l-20.664-12.039v5.3945zm0 2.2828v8.7233L14.375 28.919V17.081l2.6953 1.5573zm1.9766 1.142L24.6192 23l-5.5724 3.2196v-6.4393zm0 8.722L28.5702 23l-9.5234-5.5025V14.4L33.808 23l-14.761 8.6v-3.0976z" />
      <path d="M47 41.0387V41.5L44.6 45h14.94c13.68 0 23.16-9.54 23.16-21.96 0-12.3-9.48-21.72-23.16-21.72H44.6L47 5v.0387l12.54.1213c11.52 0 18.84 8.04 18.84 18v.12c0 10.02-7.32 17.88-18.84 17.88L47 41.0387z" />
    </g>
    <style jsx>{`
      .titleSvg {
        fill: ${core.colors.white};
        height: 56px;
        width: 486px;
        max-width: 100%;
      }
    `}</style>
  </svg>

const Header = props =>
  <header className="header">
    <div className="title">
      <Heading size="xxLarge">
        <h1>
          <Title />
        </h1>
      </Heading>
    </div>
    <style jsx>{`
      .header {
        background: linear-gradient(to top, #2bb2e3, #137bc2);
        height: 178px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
      }
      .header .title {
        display: flex;
        align-items: center;
        color: ${core.colors.white};
        margin-left: auto;
        margin-right: auto;
        padding: 0 ${core.layout.spacingLarge};
        width: 100%;
        text-align: left;
      }
      @media screen and (min-width: 769px) {
        .header .title {
          max-width: 900px;
          min-width: 300px;
        }
      }
    `}</style>
  </header>

export default _ =>
  <Chrome>
    <Header />
    <Content title="Welcome">
      <div className="points">
        <Point title="Purpose">
          The Design System strives toward a cohesive design language for
          Pluralsight’s products, a shared vocabulary for our teams, and basic
          building blocks to accelarate development.
        </Point>
        <Point title="Core">
          The Core consists of predefined variables for basic design elements
          such as <TextLink href="/core/color">color</TextLink>,{' '}
          <TextLink href="/core/typography">typography</TextLink>, and{' '}
          <TextLink href="/core/spacing">spacing</TextLink>. These system
          properties
          allow
          for building layouts and visual
          styles from defined constraints.
        </Point>
        <Point title="Components">
          Components include a variety of common UI elements to bootstrap
          experiences and ensure consistent interaction and style as well as
          accessibility optimizations . These are React components.
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

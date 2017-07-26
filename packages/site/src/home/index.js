import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import styleable from 'react-styleable'

import Chrome from '../layouts/chrome'
import css from './index.module.css'
import { Heading, Link, P } from '../common/components'

const Point = props =>
  <div className={props.css.point}>
    <Heading size="large" className={props.css.pointTitle}>
      <h2>{props.title}</h2>
    </Heading>
    <P>
      {props.children}
    </P>
  </div>

const Action = props =>
  <Link href={props.href}>
    <span className={props.css.action}>
      <Button appearance="stroke" size="large">
        {props.children}
      </Button>
    </span>
  </Link>

const Header = props =>
  <header className={props.css.header}>
    <Heading size="xx-large" className={props.css.title}>
      <h1>
        <Icon id="logo" size="medium" className={props.css.titleIcon} />
        Design System
      </h1>
    </Heading>
  </header>

const Home = props =>
  <Chrome fullWidthContent={<Header css={props.css} />}>
    <Point css={props.css} title="Purpose">
      Welcome to the Pluralsight Design System! So good to have you here. The
      Design System strives toward a cohesive design language for Pluralsight’s
      products, a shared vocabulary for our teams, and the opportunity to
      cherish consistency while providing basic building blocks to accelarate
      development.
    </Point>
    <Point css={props.css} title="Core">
      The Core consists of predifined variables for basic design elements such
      as <Link href="/core/color">color</Link>,{' '}
      <Link href="/core/typography">typography</Link>, and{' '}
      <Link href="/core/spacing">spacing</Link>. These system properties allow
      for building layouts and visual
      styles from defined constraints. Try it, you might like it.
    </Point>
    <Point css={props.css} title="Components">
      Components include a variety of common UI elements to bootstrap
      experiences and ensure consistent interaction and style as well as
      accessibility optimizations . These are React components. Plug them in and
      take a couple for a spin.
    </Point>
    <Action css={props.css} href="/install">Install the Design System</Action>
    <Action css={props.css} href="https://github.com/pluralsight/design-system">
      View on Github
    </Action>
    <Action css={props.css} href="https://www.sketchapp.com/">
      Download the Sketch UI Kit
    </Action>
  </Chrome>

export default styleable(css)(Home)

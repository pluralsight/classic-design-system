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

const Logo = _ =>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C5.3723 24 0 18.627 0 12.0005 0 5.373 5.3728 0 12 0c6.6277 0 12.0005 5.373 12 12.0005C24 18.627 18.6277 24 12 24zm0-1.0313c6.0582 0 10.9688-4.9112 10.9688-10.9682C22.969 5.9425 18.0582 1.0312 12 1.0312c-6.0577 0-10.9688 4.9113-10.9688 10.9693 0 6.057 4.9106 10.9682 10.9688 10.9682zM8.9062 8.5334V5.7187L19.6876 12 8.9062 18.2813v-2.8146L6.4688 16.875v-9.75l2.4375 1.4083zm0 1.191L7.5 8.9118v6.1763l1.4063-.8123V9.7243zm1.0313.596V13.68L12.845 12l-2.9075-1.6798zm0 4.5505v1.616L17.639 12 9.9374 7.513v1.616L14.9064 12l-4.969 2.8708z" />
  </svg>

const Header = props =>
  <header className={props.css.header}>
    <Heading size="xxLarge" className={props.css.title}>
      <h1>
        <Icon size="medium" className={props.css.titleIcon}>
          <Logo />
        </Icon>
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
      The Core consists of predefined variables for basic design elements such
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

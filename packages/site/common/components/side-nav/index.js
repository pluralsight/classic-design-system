import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'
import Group from './group'
import GroupTitle from './group-title'
import Link from './link'
import Logo from './logo'

export default styleable(css)(props => (
  <nav className={props.css.root}>
    <Logo />
    <Group>
      <GroupTitle>FOUNDATIONS</GroupTitle>
      <Link href="/foundations/color">Color</Link>
      <Link href="/foundations/spacing">Spacing</Link>
    </Group>
    <Group>
      <GroupTitle>COMPONENTS</GroupTitle>
      <Link href="/components/installation">Installation</Link>
      <Link href="/components/button">Buttons</Link>
    </Group>
  </nav>
))

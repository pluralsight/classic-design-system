import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'
import Group from './group'
import GroupTitle from './group-title'
import Link from './link'
import Logo from './logo'

export default styleable(css)(props =>
  <nav className={props.css.root}>
    <Logo />
    <Group>
      <GroupTitle>INTRODUCTION</GroupTitle>
      <Link href="/core/installation">Install <code>core</code></Link>
      <Link href="/components/installation">
        Install <code>components</code>
      </Link>
    </Group>
    <Group>
      <GroupTitle>CORE</GroupTitle>
      <Link href="/core/color">Color</Link>
      <Link href="/core/typography">Typography</Link>
      <Link href="/core/spacing">Spacing</Link>
    </Group>
    <Group>
      <GroupTitle>COMPONENTS</GroupTitle>
      <Link href="/components/button">Buttons</Link>
      <Link href="/components/card">Card</Link>
      <Link href="/components/tabs">Tabs</Link>
      <Link href="/components/text-styles">Text styles</Link>
    </Group>
  </nav>
)

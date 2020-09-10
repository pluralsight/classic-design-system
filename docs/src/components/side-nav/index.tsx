import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import { Link, navigate } from 'gatsby'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

import styles from './index.module.css'
import logo from './logo.png'

export const SideNav: React.FC<Props> = () => {
  return (
    <nav>
      <Logo />
      <VerticalTabs>
        <VerticalTabs.Group>
          {items.map((section) => {
            const sectionHeader = (
              <VerticalTabs.Tier1.Header>
                {section.header.title}
              </VerticalTabs.Tier1.Header>
            )

            return (
              <VerticalTabs.Tier1
                header={sectionHeader}
                key={section.header.title}
              >
                {section.items.map((item) => {
                  const itemHeader = (
                    <VerticalTabs.Tier2.Header
                      key={item.href}
                      href={item.href}
                      onClick={(evt: Event) => {
                        evt.preventDefault()
                        navigate(item.href)
                      }}
                    >
                      {item.title}
                    </VerticalTabs.Tier2.Header>
                  )

                  return <VerticalTabs.Tier2 header={itemHeader} />
                })}
              </VerticalTabs.Tier1>
            )
          })}
        </VerticalTabs.Group>
      </VerticalTabs>
    </nav>
  )
}

const items = [
  {
    header: {
      title: 'Core',
    },
    items: [
      {
        href: '/core/color',
        title: 'Color',
      },
      {
        href: '/core/typography',
        title: 'Typography',
      },
      {
        href: '/core/motion',
        title: 'Motion',
      },
    ],
  },
]

function Logo() {
  return (
    <Link to="/">
      <img src={logo} className={styles.logo} />
    </Link>
  )
}

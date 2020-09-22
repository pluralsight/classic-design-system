import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import { Link, navigate } from 'gatsby'
import React, { HTMLAttributes } from 'react'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'

import styles from './index.module.css'
import logoDark from './logo-dark.png'
import logoLight from './logo-light.png'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SideNav: React.FC<Props> = () => {
  return (
    <nav>
      <Logo />
      <VerticalTabs>
        <VerticalTabs.Group>
          {items.map(section => {
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
                {section.items.map(item => (
                  <VerticalTabs.Tier2
                    header={
                      <VerticalTabs.Tier2.Header
                        href={item.href}
                        onClick={(evt: Event) => {
                          evt.preventDefault()
                          navigate(item.href)
                        }}
                      >
                        {item.title}
                      </VerticalTabs.Tier2.Header>
                    }
                    key={item.href}
                  />
                ))}
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
      title: 'Core'
    },
    items: [
      {
        href: '/core/color',
        title: 'Color'
      },
      {
        href: '/core/typography',
        title: 'Typography'
      },
      {
        href: '/core/motion',
        title: 'Motion'
      },
      {
        href: '/core/spacing',
        title: 'Spacing'
      }
    ]
  },
  {
    header: {
      title: 'Layout'
    },
    items: [
      {
        href: '/components/errors',
        title: 'Error pages'
      }
    ]
  },
  {
    header: {
      title: 'Navigation'
    },
    items: [
      {
        href: '/components/breadcrumb',
        title: 'Breadcrumb'
      },
      {
        href: '/components/nav',
        title: 'Global navigation'
      },
      {
        href: '/components/tab',
        title: 'Horizontal tabs'
      },
      {
        href: '/components/verticaltabs',
        title: 'Vertical tabs'
      }
    ]
  },
  {
    header: {
      title: 'Actions'
    },
    items: [
      {
        href: '/components/actionmenu',
        title: 'Action Menu'
      },
      {
        href: '/components/button',
        title: 'Button'
      },
      {
        href: '/components/viewtoggle',
        title: 'View toggle'
      }
    ]
  },
  {
    header: {
      title: 'Inputs'
    },
    items: [
      {
        href: '/components/checkbox',
        title: 'Checkbox'
      },
      {
        href: '/components/datepicker',
        title: 'Date picker'
      },
      {
        href: '/components/dropdown',
        title: 'Select(Dropdown)'
      },
      {
        href: '/components/radio',
        title: 'Radio'
      },
      {
        href: '/components/typeahead',
        title: 'Typeahead'
      }
    ]
  },
  {
    header: {
      title: 'Lists & Tables'
    },
    items: [
      {
        href: '/components/table',
        title: 'Table'
      },
      {
        href: '/components/datawell',
        title: 'Data well'
      },
      {
        href: '/components/card',
        title: 'Card'
      },
      {
        href: '/components/carousel',
        title: 'Carousel'
      }
    ]
  },
  {
    header: {
      title: 'Images & Icons'
    },
    items: [
      {
        href: '/components/avatar',
        title: 'Avatar'
      }
    ]
  },
  {
    header: {
      title: 'Feedback'
    },
    items: [
      {
        href: '/components/badge',
        title: 'Badge'
      },
      {
        href: '/components/banner',
        title: 'Banner'
      },
      {
        href: '/components/circularprogress',
        title: 'Circular progress'
      },
      {
        href: '/components/tooltip',
        title: 'Tooltip'
      }
    ]
  },
  {
    header: {
      title: 'Utility'
    },
    items: [
      {
        href: '/components/theme',
        title: 'Theme'
      }
    ]
  }
]

function Logo() {
  const themeName = useTheme()
  return (
    <Link to="/">
      <img
        src={themeName === Theme.names.light ? logoLight : logoDark}
        className={styles.logo}
      />
    </Link>
  )
}

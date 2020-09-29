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
        href: '/core/iconography',
        title: 'Iconography'
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
      },
      {
        href: '/core/voice',
        title: 'Voice & tone'
      }
    ]
  },
  {
    header: {
      title: 'Layout'
    },
    items: [
      {
        href: '/components/appframe',
        title: 'App frame'
      },
      {
        href: '/components/layout-page-heading',
        title: 'Page heading'
      },
      {
        href: '/components/layout-page-width',
        title: 'Page width'
      },
      {
        href: '/components/layout-aside',
        title: 'Aside'
      },
      {
        href: '/components/layout-column',
        title: 'Column'
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
        href: '/components/button',
        title: 'Button'
      },
      {
        href: '/components/link',
        title: 'Link'
      },
      {
        href: '/components/actionmenu',
        title: 'Action Menu'
      },
      {
        href: '/components/tag',
        title: 'Tag'
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
        href: '/components/textinput',
        title: 'Text Input'
      },
      {
        href: '/components/searchinput',
        title: 'Search Input'
      },
      {
        href: '/components/textarea',
        title: 'Text Area'
      },
      {
        href: '/components/dropdown',
        title: 'Dropdown'
      },
      {
        href: '/components/typeahead',
        title: 'Typeahead'
      },
      {
        href: '/components/datepicker',
        title: 'Date picker'
      },
      {
        href: '/components/checkbox',
        title: 'Checkbox'
      },
      {
        href: '/components/radio',
        title: 'Radio'
      },

      {
        href: '/components/switch',
        title: 'Switch'
      },

      {
        href: '/components/form',
        title: 'Form'
      }
    ]
  },
  {
    header: {
      title: 'Text'
    },
    items: [
      {
        href: '/components/text-headings',
        title: 'Headings'
      },
      {
        href: '/components/text-paragraph',
        title: 'Paragraph'
      },
      {
        href: '/components/text-lists',
        title: 'Lists'
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
        href: '/components/row',
        title: 'Row'
      },
      {
        href: '/components/emptystate',
        title: 'Empty state'
      },
      {
        href: '/components/card',
        title: 'Card'
      },
      {
        href: '/components/drawer',
        title: 'Drawer'
      },
      {
        href: '/components/carousel',
        title: 'Carousel'
      },
      {
        href: '/components/datawell',
        title: 'Data well'
      },
      {
        href: '/components/note',
        title: 'Note'
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
      },
      {
        href: '/components/icon',
        title: 'Icon'
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
        href: '/components/tooltip',
        title: 'Tooltip'
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
        href: '/components/linearprogress',
        title: 'Linear progress'
      },
      {
        href: '/components/dialog',
        title: 'Dialog'
      },
      {
        href: '/components/errors',
        title: 'Error pages'
      },
      {
        href: '/components/starrating',
        title: 'Star rating'
      }
    ]
  },
  {
    header: {
      title: 'Utility'
    },
    items: [
      {
        href: '/components/position',
        title: 'Position'
      },
      {
        href: '/components/featureflags',
        title: 'Feature flags'
      },
      {
        href: '/components/screenreaderonly',
        title: 'Screen reader only'
      },
      {
        href: '/components/theme',
        title: 'Theme'
      },
      {
        href: '/components/scrollable',
        title: 'Scrollable'
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

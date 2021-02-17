import Button from '@pluralsight/ps-design-system-button'
import SearchInput from '@pluralsight/ps-design-system-searchinput'
import Icon from '@pluralsight/ps-design-system-icon'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import Scrollable from '@pluralsight/ps-design-system-scrollable'
import { canUseDOM } from '@pluralsight/ps-design-system-util'
import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import { Link, navigate } from 'gatsby'
import React, { HTMLAttributes, useState } from 'react'

import styles from './index.module.css'
import { useScrollRestoration } from './use-scroll-restoration'

function toggleTitle(titles: string[], title: string) {
  const index = titles.indexOf(title)
  if (index > -1) {
    return [...titles.slice(0, index), ...titles.slice(index + 1)]
  } else {
    return [...titles, title]
  }
}

interface SideNavProps extends HTMLAttributes<HTMLDivElement> {}
export const SideNav: React.FC<SideNavProps> = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const headerContainingActiveHref = groups.find(
    group =>
      !!group.items.find(item => new RegExp(item.href + '/?').test(pathname))
  )

  const [openHeaderTitles, setOpenHeaderTitles] = useSessionStorage<string[]>(
    'psds-sidenav-openheadertitles',
    headerContainingActiveHref ? [headerContainingActiveHref.header.title] : []
  )

  const scrollRestore = useScrollRestoration('sidenav-list')
  React.useLayoutEffect(() => {
    if (typeof window.docsearch === 'function')
      window.docsearch({
        apiKey: '67e67fb4a170ba472d8771660b39b5f2',
        indexName: 'pluralsight_design-system',
        inputSelector: '#ALGOLIA_DOCSEARCH_INPUT'
      })
  }, [])
  return (
    <div className={styles.sideNav}>
      <div className={styles.header}>
        <Logo />
        <SearchInput id="ALGOLIA_DOCSEARCH_INPUT" className={styles.search} />
      </div>
      <Scrollable className={styles.scrollable} {...scrollRestore}>
        <nav>
          <VerticalTabs>
            <VerticalTabs.Group>
              {groups.map(section => {
                const isOpen = openHeaderTitles.includes(section.header.title)
                return (
                  <VerticalTabs.Tier1
                    header={
                      <VerticalTabs.Tier1.Header>
                        {section.header.title}
                      </VerticalTabs.Tier1.Header>
                    }
                    collapsible
                    collapsed={!isOpen}
                    key={section.header.title}
                    onClick={() =>
                      setOpenHeaderTitles(
                        toggleTitle(openHeaderTitles, section.header.title)
                      )
                    }
                  >
                    {section.items.map(item => {
                      const isActive = canUseDOM()
                        ? new RegExp(item.href + '/?').test(
                            window.location.pathname
                          )
                        : false
                      return (
                        <VerticalTabs.Tier2
                          active={isActive}
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
                      )
                    })}
                  </VerticalTabs.Tier1>
                )
              })}
            </VerticalTabs.Group>
          </VerticalTabs>
        </nav>
      </Scrollable>
      <div className={styles.githubButton}>
        <Button
          icon={<GithubIcon />}
          appearance={Button.appearances.secondary}
          size={Button.sizes.small}
          href="https://github.com/pluralsight/design-system/issues/new"
        >
          Submit an issue
        </Button>
      </div>
    </div>
  )
}

const groups = [
  {
    header: {
      title: 'Guides'
    },
    items: [
      {
        href: '/guides/designworkflow',
        title: 'Design workflow'
      },
      {
        href: '/guides/developmentworkflow',
        title: 'Development workflow'
      },
      {
        href: '/guides/contribute',
        title: 'Contribute'
      }
    ]
  },
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
      title: 'Text'
    },
    items: [
      {
        href: '/components/text-heading',
        title: 'Heading'
      },
      {
        href: '/components/text-label',
        title: 'Label'
      },
      {
        href: '/components/text-paragraph',
        title: 'Paragraph'
      },
      {
        href: '/components/text-list',
        title: 'List'
      },
      {
        href: '/components/text-code',
        title: 'Code'
      }
    ]
  },
  {
    header: {
      title: 'Navigation'
    },
    items: [
      {
        href: '/components/nav',
        title: 'Global navigation'
      },
      {
        href: '/components/breadcrumb',
        title: 'Breadcrumb'
      },
      {
        href: '/components/tab',
        title: 'Horizontal tabs'
      },
      {
        href: '/components/verticaltabs',
        title: 'Vertical tabs'
      },
      {
        href: '/components/steps',
        title: 'Steps'
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
        href: '/components/tag',
        title: 'Tag'
      },
      {
        href: '/components/viewtoggle',
        title: 'View toggle'
      },
      {
        href: '/components/actionmenu',
        title: 'Action Menu'
      }
    ]
  },
  {
    header: {
      title: 'Form inputs'
    },
    items: [
      {
        href: '/components/field',
        title: 'Field'
      },
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
        href: '/components/tagsinput',
        title: 'Tags Input'
      },
      {
        href: '/components/multiselect',
        title: 'Multi Select'
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
      title: 'Content display'
    },
    items: [
      {
        href: '/components/row',
        title: 'Row'
      },
      {
        href: '/components/card',
        title: 'Card'
      },
      {
        href: '/components/carousel',
        title: 'Carousel'
      },
      {
        href: '/components/table',
        title: 'Table'
      },
      {
        href: '/components/drawer',
        title: 'Drawer'
      },
      {
        href: '/components/datawell',
        title: 'Data well'
      },
      {
        href: '/components/note',
        title: 'Note'
      },
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
        href: '/components/starrating',
        title: 'Star rating'
      },
      {
        href: '/components/dialog',
        title: 'Dialog'
      },
      {
        href: '/components/emptystate',
        title: 'Empty state'
      },
      {
        href: '/components/errors',
        title: 'Error pages'
      }
    ]
  },
  {
    header: {
      title: 'Utilities'
    },
    items: [
      {
        href: '/components/theme',
        title: 'Theme'
      },
      {
        href: '/components/position',
        title: 'Position'
      },
      {
        href: '/components/screenreaderonly',
        title: 'Screen reader only'
      },
      {
        href: '/components/scrollable',
        title: 'Scrollable'
      },
      {
        href: '/components/featureflags',
        title: 'Feature flags'
      }
    ]
  },
  {
    header: {
      title: 'Patterns'
    },
    items: [
      {
        href: '/patterns/page-headers',
        title: 'Page headers'
      }
    ]
  }
]

function Logo() {
  const themeName = useTheme()
  return (
    <Link to="/">
      <img
        className={styles.logo}
        src={
          themeName === Theme.names.light
            ? '/img/logo-light@2x.png'
            : '/img/logo-dark@2x.png'
        }
      />
    </Link>
  )
}

function GithubIcon(props) {
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0021156,2.52207031 C6.76737054,2.52207031 2.52207031,6.76678852 2.52207031,12.0032796 C2.52207031,16.1921233 5.23838731,19.7453942 9.0058439,20.999079 C9.48019538,21.0863829 9.65305721,20.7936237 9.65305721,20.5421883 C9.65305721,20.3175261 9.64490884,19.7209491 9.64025263,18.9299753 C7.00309122,19.5026892 6.44667402,17.6588297 6.44667402,17.6588297 C6.01539249,16.5634561 5.39378835,16.2718609 5.39378835,16.2718609 C4.53297137,15.6840143 5.4589753,15.6956548 5.4589753,15.6956548 C6.41058839,15.7625879 6.91113105,16.6728771 6.91113105,16.6728771 C7.75681535,18.1215407 9.13039754,17.7030637 9.670518,17.4603587 C9.7566579,16.848067 10.001691,16.4301721 10.2723333,16.1932874 C8.16714393,15.9540745 5.9536977,15.1404017 5.9536977,11.5073932 C5.9536977,10.4725503 6.32328443,9.62570197 6.9297559,8.96335598 C6.83197547,8.72356112 6.50662274,7.75914345 7.02288011,6.45424036 C7.02288011,6.45424036 7.81851014,6.19931282 9.62977615,7.42622438 C10.3858284,7.21553084 11.1971731,7.11076609 12.0032796,7.10669191 C12.8088041,7.11076609 13.6195668,7.21553084 14.3767831,7.42622438 C16.1868851,6.19931282 16.981351,6.45424036 16.981351,6.45424036 C17.4987725,7.75914345 17.1734197,8.72356112 17.0762213,8.96335598 C17.6838568,9.62570197 18.0505335,10.4725503 18.0505335,11.5073932 C18.0505335,15.1497141 15.8335951,15.9511644 13.7220035,16.185721 C14.0619068,16.4784803 14.3651426,17.0570145 14.3651426,17.9416945 C14.3651426,19.2087659 14.353502,20.2313862 14.353502,20.5421883 C14.353502,20.7959518 14.5246178,21.0910391 15.0053716,20.9984969 C18.769918,19.741902 21.4839069,16.1909592 21.4839069,12.0032796 C21.4839069,6.76678852 17.2386067,2.52207031 12.0021156,2.52207031" />
      </svg>
    </Icon>
  )
}

function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    if (!canUseDOM()) return initialValue

    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log('psds docs: error setting session value', error)
      return initialValue
    }
  })

  const setValue = value => {
    if (!canUseDOM()) return

    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log('psds docs: error setting session value', error)
    }
  }

  return [storedValue, setValue]
}

import {
  colorsBorder,
  colorsPink,
  layout
} from '@pluralsight/ps-design-system-core'
import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import {
  PageHeadingLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavItem from '@pluralsight/ps-design-system-navitem'
import NavUser from '@pluralsight/ps-design-system-navuser'
import * as Text from '@pluralsight/ps-design-system-text'
import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import React, { Fragment, HTMLAttributes } from 'react'

export const MockContent: React.FC = () => {
  return (
    <>
      <div style={{ background: colorsPink[6] }}>
        <PageWidthLayout>
          <PageHeadingLayout heading={<h3>Page title</h3>} />
        </PageWidthLayout>
      </div>

      <PageWidthLayout>
        <Text.P>
          Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
          cotton candy candy canes bear claw apple pie. Dessert apple pie
          caramels carrot cake bear claw sweet donut. Croissant chocolate bear
          claw jelly chocolate candy pie pudding caramels. Cake muffin candy
          liquorice liquorice tiramisu powder pie dragée. Danish soufflé sweet
          apple pie cupcake tart. Danish cookie oat cake tiramisu lemon drops
          pie apple pie cake cotton candy. Pudding brownie jujubes. Chocolate
          bar biscuit liquorice candy jelly-o tiramisu icing muffin sweet roll.
          Jelly candy canes chocolate dragée. Danish biscuit sugar plum cake.
          Cotton candy soufflé muffin gummi bears.
        </Text.P>

        <Text.P>
          Sweet roll sweet roll cotton candy marshmallow lemon drops caramels
          sweet roll toffee. Bear claw powder ice cream topping wafer cake
          tootsie roll. Lemon drops pudding dessert toffee fruitcake toffee.
          Icing marzipan cake pastry biscuit liquorice chupa chups sesame snaps.
          Biscuit muffin donut. Marshmallow carrot cake icing icing dragée
          jujubes lemon drops. Danish cheesecake sesame snaps. Sweet sugar plum
          fruitcake tootsie roll. Fruitcake jelly-o soufflé muffin cheesecake
          pie apple pie jelly powder. Cake dragée danish muffin dragée soufflé
          marzipan croissant danish. Soufflé chupa chups cake biscuit icing
          pastry cake danish danish. Icing cotton candy oat cake chocolate
          macaroon tiramisu sweet dragée cake. Ice cream carrot cake lemon
          drops. Jelly sweet wafer liquorice brownie sesame snaps halvah apple
          pie jelly-o.
        </Text.P>

        <Text.P>
          Tootsie roll dragée apple pie. Pie cake toffee caramels gummies chupa
          chups carrot cake chupa chups. Jelly-o fruitcake macaroon chocolate.
          Brownie lollipop sugar plum gummies marshmallow muffin bonbon carrot
          cake. Pudding powder lemon drops halvah. Icing cupcake pastry chupa
          chups danish sweet bear claw sugar plum. Chupa chups wafer donut
          lollipop. Sweet roll croissant cake chocolate cake croissant pastry
          toffee. Chocolate cake liquorice halvah pastry danish candy canes.
          Apple pie pastry topping sesame snaps cupcake liquorice icing
          chocolate bar brownie. Chocolate cake sesame snaps cake gummies
          cupcake pastry jujubes fruitcake. Muffin fruitcake soufflé macaroon
          danish. Dessert chocolate marshmallow sesame snaps donut toffee ice
          cream sugar plum dragée.
        </Text.P>

        <Text.P>
          Marzipan lollipop jelly-o soufflé macaroon tart danish tart dessert.
          Chupa chups lemon drops lemon drops jujubes dragée dessert. Wafer
          chupa chups gummi bears sugar plum gummies. Powder topping apple pie
          danish sweet roll. Pudding toffee brownie. Tootsie roll lemon drops
          sweet macaroon jelly-o oat cake muffin chocolate. Wafer chocolate
          danish cookie cookie danish. Chocolate jelly-o gingerbread fruitcake
          croissant wafer lollipop bonbon macaroon. Carrot cake candy dessert.
          Brownie gummies topping sweet roll jelly sesame snaps croissant
          marshmallow caramels. Candy canes jelly-o jelly beans chupa chups
          tiramisu cupcake cake tart. Biscuit brownie chocolate bar danish candy
          canes donut liquorice. Muffin cake jelly beans muffin powder
          gingerbread toffee. Gingerbread topping toffee chupa chups sweet roll.
        </Text.P>

        <Text.P>
          Jelly beans gingerbread dessert macaroon candy canes. Candy liquorice
          carrot cake chocolate bar pastry dessert caramels danish. Donut apple
          pie tart dragée sesame snaps chocolate tootsie roll jelly-o sugar
          plum. Chocolate cake sesame snaps jelly beans. Gummies pudding
          gummies. Jelly-o topping biscuit cookie halvah pudding gingerbread
          toffee cake. Sesame snaps topping icing jelly cake donut macaroon
          candy canes jelly beans. Tiramisu pie pie. Cake gingerbread pastry
          topping jujubes apple pie pie. Jelly beans marshmallow chocolate cake
          chocolate cake biscuit danish dessert. Halvah biscuit macaroon. Sugar
          plum pie gummi bears gummies pastry.
        </Text.P>

        <Text.P>
          Marzipan lollipop jelly-o soufflé macaroon tart danish tart dessert.
          Chupa chups lemon drops lemon drops jujubes dragée dessert. Wafer
          chupa chups gummi bears sugar plum gummies. Powder topping apple pie
          danish sweet roll. Pudding toffee brownie. Tootsie roll lemon drops
          sweet macaroon jelly-o oat cake muffin chocolate. Wafer chocolate
          danish cookie cookie danish. Chocolate jelly-o gingerbread fruitcake
          croissant wafer lollipop bonbon macaroon. Carrot cake candy dessert.
          Brownie gummies topping sweet roll jelly sesame snaps croissant
          marshmallow caramels. Candy canes jelly-o jelly beans chupa chups
          tiramisu cupcake cake tart. Biscuit brownie chocolate bar danish candy
          canes donut liquorice. Muffin cake jelly beans muffin powder
          gingerbread toffee. Gingerbread topping toffee chupa chups sweet roll.
        </Text.P>

        <Text.P>
          Jelly beans gingerbread dessert macaroon candy canes. Candy liquorice
          carrot cake chocolate bar pastry dessert caramels danish. Donut apple
          pie tart dragée sesame snaps chocolate tootsie roll jelly-o sugar
          plum. Chocolate cake sesame snaps jelly beans. Gummies pudding
          gummies. Jelly-o topping biscuit cookie halvah pudding gingerbread
          toffee cake. Sesame snaps topping icing jelly cake donut macaroon
          candy canes jelly beans. Tiramisu pie pie. Cake gingerbread pastry
          topping jujubes apple pie pie. Jelly beans marshmallow chocolate cake
          chocolate cake biscuit danish dessert. Halvah biscuit macaroon. Sugar
          plum pie gummi bears gummies pastry.
        </Text.P>
      </PageWidthLayout>
    </>
  )
}

interface SideNavProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
  sections?: Section[]
}

interface Section {
  header?: SectionHeader
  items: SectionItem[]
}
interface SectionHeader {
  href?: string
  id: string
  icon?: React.ReactElement
  title: string
}
interface SectionItem {
  collapsible?: boolean
  href?: string
  id: string
  icon?: React.ReactElement
  subItems?: SectionSubItem[]
  title: string
}
interface SectionSubItem {
  href?: string
  icon?: React.ReactElement
  id: string
  title: string
}

const defaultSections: Section[] = [
  {
    header: {
      href: '#',
      icon: <PlaceholderIcon />,
      id: 'section-header',
      title: 'Section Header'
    },
    items: [
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'section-item__first',
        title: 'First Item',
        subItems: [
          {
            href: '#',
            icon: <PlaceholderIcon />,
            id: 'section-subitem__first',
            title: 'First SubItem'
          },
          {
            href: '#',
            icon: <PlaceholderIcon />,
            id: 'section-subitem__second',
            title: 'Second SubItem'
          }
        ]
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'section-item__second',
        title: 'Second Item'
      }
    ]
  }
]
export const SideNav: React.FC<SideNavProps> = props => {
  const {
    children,
    collapsed = false,
    sections = defaultSections,
    ...rest
  } = props

  return (
    <div {...rest}>
      {sections.map((section, sectionKey) => {
        const { header, items = [] } = section

        return (
          <Fragment key={sectionKey}>
            {header && (
              <SectionHeader collapsed={collapsed} title={header.title} />
            )}

            <VerticalTabs forceCollapsed={collapsed} hideLabels={collapsed}>
              {items.map(item => {
                const { subItems = [] } = item
                return (
                  <VerticalTabs.Group key={item.id}>
                    <VerticalTabs.Tier1
                      header={
                        <VerticalTabs.Tier1.Header
                          href={item.href}
                          icon={item.icon}
                        >
                          {item.title}
                        </VerticalTabs.Tier1.Header>
                      }
                    />

                    {subItems.map(subItem => (
                      <VerticalTabs.Tier2
                        key={subItem.id}
                        header={
                          <VerticalTabs.Tier2.Header href={subItem.href}>
                            {subItem.title}
                          </VerticalTabs.Tier2.Header>
                        }
                      />
                    ))}
                  </VerticalTabs.Group>
                )
              })}
            </VerticalTabs>

            <SectionDivider />
          </Fragment>
        )
      })}

      {children}
    </div>
  )
}

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
  title: string
}
export const SectionHeader: React.FC<SectionHeaderProps> = props => {
  const { collapsed = false, title, ...rest } = props

  return (
    <div
      style={{
        margin: `${layout.spacingSmall} 0 0`,
        opacity: collapsed ? 0 : 1,
        padding: `0 ${layout.spacingLarge}`
      }}
      {...rest}
    >
      <h2 style={{ margin: 0 }}>
        <Text.Label
          size={Text.Label.sizes.xSmall}
          color={Text.Label.colors.secondary}
          caps
        >
          {title}
        </Text.Label>
      </h2>
    </div>
  )
}

interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {}
export const SectionDivider: React.FC<SectionDividerProps> = props => {
  return (
    <div
      style={{ height: 1, borderBottom: `1px solid ${colorsBorder.lowOnDark}` }}
      {...props}
    />
  )
}

interface TopNavProps extends HTMLAttributes<HTMLDivElement> {
  brand?: React.ReactNode
  onMobileMenuClick?: React.MouseEventHandler
  items?: TopNavItem[]
}

interface TopNavItem {
  href?: string
  id: string
  icon?: React.ReactNode
  title: string
}

export const TopNav: React.FC<TopNavProps> = props => {
  const {
    brand = <SkillsBrand />,
    children,
    items = [],
    onMobileMenuClick,
    ...rest
  } = props

  return (
    <div {...rest}>
      <NavBar
        brand={brand}
        items={
          <>
            {items.map(item => {
              return (
                <div
                  key={item.id}
                  style={{
                    marginRight: layout.spacingXXSmall,
                    display: 'inline-block'
                  }}
                >
                  <NavItem icon={item.icon}>{item.title}</NavItem>
                </div>
              )
            })}

            {children}
          </>
        }
        onMobileMenuClick={onMobileMenuClick}
        user={<NavUser name="Jake" meta="Accenture" />}
      />
    </div>
  )
}

interface SkillsBrandProps extends HTMLAttributes<HTMLDivElement> {}
export const SkillsBrand: React.FC<SkillsBrandProps> = props => {
  return <NavBrand {...props} logo={<SkillsLogo />} wordmark="SKILLS" />
}

export const SkillsLogo: React.FC = () => {
  return (
    <svg aria-hidden viewBox="0 0 32 32">
      <defs>
        <linearGradient
          id="skills-gradient"
          x1="45.6377"
          y1="47.4727"
          x2="-32.2436"
          y2="-35.2537"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.03" stopColor="#F05A28" />
          <stop offset="0.93" stopColor="#EB008B" />
        </linearGradient>
      </defs>
      <path
        d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
        fill="url(#skills-gradient)"
      />
    </svg>
  )
}

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Banner from '@pluralsight/ps-design-system-banner'
import Button from '@pluralsight/ps-design-system-button'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import * as core from '@pluralsight/ps-design-system-core'
import DatePicker from '@pluralsight/ps-design-system-datepicker'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Form from '@pluralsight/ps-design-system-form'
import { CloseIcon, CaretRightIcon } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import Tag from '@pluralsight/ps-design-system-tag'
import * as Text from '@pluralsight/ps-design-system-text'
import TextInput from '@pluralsight/ps-design-system-textinput'
import TextArea from '@pluralsight/ps-design-system-textarea'
import Radio from '@pluralsight/ps-design-system-radio'
import NavBar from '@pluralsight/ps-design-system-navbar'
import React from 'react'
import { capitalize } from '@pluralsight/ps-design-system-util'
import Switch from '@pluralsight/ps-design-system-switch'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  Intro,
  P,
  PageHeading,
  SectionHeading,
  TextLink,
  ThemeToggle
} from '../../src/ui/index.js'

export default function NavPage() {
  return (
    <Chrome>
      <Content title="Form">
        <PageHeading packageName="nav">Nav</PageHeading>

        <Intro>
          The navigation components provide the building blocks for creating a
          global navigation system. These components are not a navigation
          product in itself like Prism, but will enable product organizations to
          own and operate their own global navigation while remaining consistent
          with other products in the Pluralsight family.
        </Intro>

        <P>Install one or more of the component dependencies:</P>
        <Code language="bash">
          {`npm install @pluralsight/ps-design-system-navbar 
npm install @pluralsight/ps-design-system-navbrand 
npm install @pluralsight/ps-design-system-navitem 
npm install @pluralsight/ps-design-system-navuser 
npm install @pluralsight/ps-design-system-navcookiebanner`}
        </Code>

        <P>Include the React components in your project:</P>
        <Code language="javascript">
          {`import NavBar from '@pluralsight/ps-design-system-navbar' 
import NavBrand from '@pluralsight/ps-design-system-navbrand' 
import NavItem from '@pluralsight/ps-design-system-navitem' 
import NavUser from '@pluralsight/ps-design-system-navuser' 
import NavCookieBanner from '@pluralsight/ps-design-system-navcookiebanner'`}
        </Code>
        <SectionHeading>Components</SectionHeading>
        <h3>Nav bar</h3>
        <P>
          The nav bar component is the container of the global navigation. It’s
          56px tall and should be fluid and sticky to the left/top/right of the
          browser viewport.
        </P>
        <Example.React
          themeToggle
          orient="vertical"
          includes={{
            NavBar
          }}
          codes={[`<NavBar />`]}
        />

        <h3>Nav item</h3>
        <P>
          The nav item component is for creating links to pages or as action
          triggers. A horizontal variant can be used with or without an icon.
          The vertical variant always requires an icon. The icon-only variant
          can also be used for very recognizable icons/actions when a label is
          unecessary.
        </P>
        <Example.React
          themeToggle
          orient="vertical"
          includes={{
            NavBar
          }}
          codes={[`<NavBar />`]}
        />

        <h3>Nav brand</h3>
        <P>
          The nav brand component creates a consistent use of branding for the
          icon and logo of an app. It is intended to always be placed at the
          left end of the nav bar.
        </P>
        <Example.React
          themeToggle
          orient="vertical"
          includes={{
            NavBar
          }}
          codes={[`<NavBar />`]}
        />

        <h3>Nav user</h3>
        <P>
          The nav user component is for actions & settings related to the user.
          It is intended to always be placed at the right end of the nav bar.
          For wider screens, text can be displayed for the user’s name and a
          meta item (such as a plan name) or only a name. When the screen is
          narrow, the text will be dropped.
        </P>
        <Example.React
          themeToggle
          orient="vertical"
          includes={{
            NavBar
          }}
          codes={[`<NavBar />`]}
        />

        <h3>Nav cookie banner</h3>
        <P>TODO</P>
        <Example.React
          themeToggle
          orient="vertical"
          includes={{
            NavBar
          }}
          codes={[`<NavBar />`]}
        />

        <SectionHeading>Guidelines</SectionHeading>
        <P>Always keep the navigation bar height 56px.</P>
        <P>
          The navigation bar should be fluid and sticky to the left/top/right
          edges of the browser viewport. This will happen automatically if you
          use the app frame component.
        </P>
        <P>
          Be prudent with the nav items and the the number you use. Try to keep
          it to about about 2-5. Organize the items well, use short yet
          descriptive labels, and use grouping with dropdown menus if you need
          more items than will fit.
        </P>
        <P>
          Use the nav brand component to provide consistency between
          experiences.
        </P>
        <P>
          Use icon only nav items when the icon clearly represents what the nav
          item is or does. Use tooltips with icon only nav items.
        </P>
      </Content>
    </Chrome>
  )
}

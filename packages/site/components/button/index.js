import Heading from '@pluralsight/ps-heading/react'
// TODO: use our ps-link component!! agh, I thought we did this.
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, P, Link } from '../../common/components'
import css from './index.module.css'

import Button from '@pluralsight/ps-button/react'
import Icon from '@pluralsight/ps-icon/react'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading size="xx-large"><h1>Buttons</h1></Heading>

      <P>
        Install the component dependency:
      </P>
      <Code language="bash">
        npm install @pluralsight/ps-button --save-dev
      </Code>

      <P>
        Include a React component in your project:
      </P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-button/react'
      </Code>

      <P>
        For more project setup guidance, see the
        {' '}
        <RouterLink to="/components/installation">
          Component Installation Instructions
        </RouterLink>
        .
      </P>

      <Heading size="large"><h2>Button appearance</h2></Heading>
      <P>
        Define a button appearance by ...{' '}
      </P>
      <Example.React
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[{}, { appearance: 'stroke' }, { appearance: 'flat' }]}
      />

      <Heading size="large"><h2>Button sizes</h2></Heading>
      <Example.React
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[
          { size: 'large' },
          { size: 'medium' },
          { size: 'small' },
          { size: 'tiny' }
        ]}
      />

      <Heading size="large"><h2>Button with icon</h2></Heading>
      <Example.React
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[
          { exampleIcon: '{<Icon id="logo" />}', icon: <Icon id="logo" /> },
          {
            exampleIcon: '{<Icon id="logo" />}',
            icon: <Icon id="logo" />,
            appearance: 'stroke'
          },
          {
            exampleIcon: '{<Icon id="logo" />}',
            icon: <Icon id="logo" />,
            iconAlign: 'right',
            appearance: 'flat'
          }
        ]}
      />

      <Heading size="large"><h2>Button with lone icon</h2></Heading>
      <Example.React
        component={<Button />}
        name="Button"
        permutations={[
          { exampleIcon: '{<Icon id="logo" />}', icon: <Icon id="logo" /> },
          {
            exampleIcon:
              "{<Icon id=\"logo\" css={{ 'ps-icon__fg--fill': 'cssModuleSelector' }}/>}",
            icon: (
              <Icon
                id="logo"
                css={{ 'ps-icon__fg--fill': props.css.flatIcon }}
              />
            ),
            appearance: 'flat'
          }
        ]}
      />

      <Heading size="large"><h2>Disabled button</h2></Heading>
      <Example.React
        component={<Button>Disabled button</Button>}
        name="Button"
        permutations={[
          { disabled: true },
          { disabled: true, appearance: 'flat' },
          {
            disabled: true,
            exampleIcon: '{<Icon id="logo" />}',
            icon: <Icon id="logo" />
          }
        ]}
      />
    </div>
  )
})

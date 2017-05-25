import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, P, Link } from '../../common/components'
import css from './index.module.css'

import Button from '@pluralsight/ps-button/react'
import Icon from '@pluralsight/ps-icon/react'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Buttons</Heading.Xxl>

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

      <Heading.Large>Button appearance</Heading.Large>
      <P>
        Define a button appearance by ...{' '}
      </P>
      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[{}, { appearance: 'stroke' }, { appearance: 'flat' }]}
      />

      <Heading.Large>Button sizes</Heading.Large>
      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[
          { size: 'large' },
          { size: 'medium' },
          { size: 'small' },
          { size: 'tiny' }
        ]}
      />

      <Heading.Large>Button with icon</Heading.Large>
      <Example
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

      <Heading.Large>Button with lone icon</Heading.Large>
      <Example
        component={<Button />}
        name="Button"
        permutations={[
          { exampleIcon: '{<Icon id="logo" />}', icon: <Icon id="logo" /> },
          {
            exampleIcon: "{<Icon id=\"logo\" css={{ 'ps-icon__fg--fill': 'cssModuleSelector' }}/>}",
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

      <Heading.Large>Disabled button</Heading.Large>
      <Example
        component={<Button>Disabled button</Button>}
        name="Button"
        permutations={[
          { disabled: true },
          { disabled: true, appearance: 'flat' }
        ]}
      />
    </div>
  )
})

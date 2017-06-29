import { Heading } from '@pluralsight/ps-design-system-text/react'
import React from 'react'

// TODO: extract P component
import { Example, P } from '../../common/components'

export default _ =>
  <div>
    <Heading size="large"><h2>Body text</h2></Heading>

    <P>
      Try to use common paragraph style when possible.
    </P>

    <Example.React
      component={
        <P>
          Paragraph - Lorem ipsum dolor sit amet adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P>
      }
      name="P"
      orient="vertical"
      permutations={[{}]}
    />
  </div>

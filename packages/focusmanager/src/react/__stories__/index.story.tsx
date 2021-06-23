import * as Text from '@pluralsight/ps-design-system-text'
import Button from '@pluralsight/ps-design-system-button'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import FocusManager from '../index'

export default {
  title: 'Components/FocusManager',
  component: FocusManager
} as Meta

export const Trapped: Story = () => (
  <FocusManager style={{ color: 'white', textAlign: 'center', margin: 100 }}>
    <Text.P>
      <a href="#">Tri-tip pork chop jowl</a>, spare ribs shankle sirloin kevin.
      Ham hock tri-tip jowl, <a href="#">shank venison ham</a> andouille rump
      salami swine sausage turducken beef ribs cupim jerky. Chuck swine shankle
      short loin tri-tip beef ribs leberkas andouille spare ribs shoulder
      buffalo ground round tongue <a href="#">sirloin bresaola</a>. Kielbasa
      rump buffalo shoulder chicken beef brisket. Spare ribs drumstick tail
      cupim bacon filet mignon.
    </Text.P>
  </FocusManager>
)

export const NotTrapped: Story = () => (
  <FocusManager
    style={{ color: 'white', textAlign: 'center', margin: 100 }}
    trapped={false}
  >
    <Text.P>
      <a href="#">Tri-tip pork chop jowl</a>, spare ribs shankle sirloin kevin.
      Ham hock tri-tip jowl, <a href="#">shank venison ham</a> andouille rump
      salami swine sausage turducken beef ribs cupim jerky. Chuck swine shankle
      short loin tri-tip beef ribs leberkas andouille spare ribs shoulder
      buffalo ground round tongue <a href="#">sirloin bresaola</a>. Kielbasa
      rump buffalo shoulder chicken beef brisket. Spare ribs drumstick tail
      cupim bacon filet mignon.
    </Text.P>
  </FocusManager>
)

export const NoFocusableChildren: Story = () => (
  <FocusManager style={{ color: 'white', textAlign: 'center', margin: 100 }}>
    <Text.P>
      Tri-tip pork chop jowl, spare ribs shankle sirloin kevin. Ham hock tri-tip
      jowl, shank venison ham andouille rump salami swine sausage turducken beef
      ribs cupim jerky. Chuck swine shankle short loin tri-tip beef ribs
      leberkas andouille spare ribs shoulder buffalo ground round tongue sirloin
      bresaola. Kielbasa rump buffalo shoulder chicken beef brisket. Spare ribs
      drumstick tail cupim bacon filet mignon.
    </Text.P>
  </FocusManager>
)

export const DynamicChildren: Story = () => {
  const [showButton, setShowButton] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setShowButton(true), 1000)
  }, [])

  return (
    <FocusManager trapped={true} autofocus={true}>
      <Button>Is tabbable</Button>
      {showButton && <Button>Becomes tabbable</Button>}
    </FocusManager>
  )
}

export function DeepDynamicChildren() {
  const [showButton, setShowButton] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setShowButton(true), 1000)
  }, [])
  return (
    <div>
      <div>
        <h2>Deeper in the tree...</h2>
        <div>
          <Button>Is tabbable</Button>
          {showButton && <Button>Becomes tabbable</Button>}
        </div>
      </div>
    </div>
  )
}

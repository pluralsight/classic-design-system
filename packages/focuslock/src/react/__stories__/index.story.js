import { storiesOf } from '@storybook/react'
import React from 'react'

import Text from '@pluralsight/ps-design-system-text/react'

import FocusLock from '..'

storiesOf('FocusLock', module).add('default', _ => (
  <FocusLock style={{ color: 'white', textAlign: 'center', margin: 100 }}>
    <Text.P>
      <a href="#">Tri-tip pork chop jowl</a>, spare ribs shankle sirloin kevin.
      Ham hock tri-tip jowl, <a href="#">shank venison ham</a> andouille rump
      salami swine sausage turducken beef ribs cupim jerky. Chuck swine shankle
      short loin tri-tip beef ribs leberkas andouille spare ribs shoulder
      buffalo ground round tongue <a href="#">sirloin bresaola</a>. Kielbasa
      rump buffalo shoulder chicken beef brisket. Spare ribs drumstick tail
      cupim bacon filet mignon.
    </Text.P>
  </FocusLock>
))

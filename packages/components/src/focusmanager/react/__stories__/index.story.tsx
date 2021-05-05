import { storiesOf } from '@storybook/react'
import React from 'react'

import * as Text from '../../../text'

import { FocusManager } from '../index'

storiesOf('FocusManager', module)
  .add('trapped', () => (
    <FocusManager style={{ color: 'white', textAlign: 'center', margin: 100 }}>
      <Text.P>
        <a href="#">Tri-tip pork chop jowl</a>, spare ribs shankle sirloin
        kevin. Ham hock tri-tip jowl, <a href="#">shank venison ham</a>{' '}
        andouille rump salami swine sausage turducken beef ribs cupim jerky.
        Chuck swine shankle short loin tri-tip beef ribs leberkas andouille
        spare ribs shoulder buffalo ground round tongue{' '}
        <a href="#">sirloin bresaola</a>. Kielbasa rump buffalo shoulder chicken
        beef brisket. Spare ribs drumstick tail cupim bacon filet mignon.
      </Text.P>
    </FocusManager>
  ))
  .add('not trapped', () => (
    <FocusManager
      style={{ color: 'white', textAlign: 'center', margin: 100 }}
      trapped={false}
    >
      <Text.P>
        <a href="#">Tri-tip pork chop jowl</a>, spare ribs shankle sirloin
        kevin. Ham hock tri-tip jowl, <a href="#">shank venison ham</a>{' '}
        andouille rump salami swine sausage turducken beef ribs cupim jerky.
        Chuck swine shankle short loin tri-tip beef ribs leberkas andouille
        spare ribs shoulder buffalo ground round tongue{' '}
        <a href="#">sirloin bresaola</a>. Kielbasa rump buffalo shoulder chicken
        beef brisket. Spare ribs drumstick tail cupim bacon filet mignon.
      </Text.P>
    </FocusManager>
  ))
  .add('no focusable children', () => (
    <FocusManager style={{ color: 'white', textAlign: 'center', margin: 100 }}>
      <Text.P>
        Tri-tip pork chop jowl, spare ribs shankle sirloin kevin. Ham hock
        tri-tip jowl, shank venison ham andouille rump salami swine sausage
        turducken beef ribs cupim jerky. Chuck swine shankle short loin tri-tip
        beef ribs leberkas andouille spare ribs shoulder buffalo ground round
        tongue sirloin bresaola. Kielbasa rump buffalo shoulder chicken beef
        brisket. Spare ribs drumstick tail cupim bacon filet mignon.
      </Text.P>
    </FocusManager>
  ))

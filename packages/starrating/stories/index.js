import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import StarRating from '../react'

const valueStory = storiesOf('value', module)
;[null, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].forEach(value =>
  valueStory.add(`value ${value}`, _ => <StarRating value={value} />)
)

const onClickStory = storiesOf('onClick', module)
onClickStory.add('onClick', _ => <StarRating value={4.5} onClick={alert} />)
onClickStory.add('!onClick', _ => <StarRating value={4.5} />)

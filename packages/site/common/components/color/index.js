import React from 'react'

import Palette from './palette'
import Swatch from './swatch'
import HorzGradient from './horz-gradient'
import VertGradient from './vert-gradient'

export default {
  Palette,
  DarkSwatch: props => <Swatch {...props} dark={true} />,
  LightSwatch: props => <Swatch {...props} dark={false} />,
  HorzGradient,
  VertGradient
}

import React from 'react'

import Palette from './palette'
import Swatch from './swatch'

export default {
  Palette,
  DarkSwatch: props => <Swatch {...props} dark={true} />,
  LightSwatch: props => <Swatch {...props} dark={false} />
}

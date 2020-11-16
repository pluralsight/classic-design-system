import { P } from '@pluralsight/ps-design-system-text'
import React from 'react'

import * as styles from './intro.module.css'

export const Intro: React.FC = props => {
  return <P size={P.sizes.large} {...props} />
}

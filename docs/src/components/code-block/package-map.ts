import Avatar from '@pluralsight/ps-design-system-avatar'
import Carousel from '@pluralsight/ps-design-system-carousel'
import Card from '@pluralsight/ps-design-system-card'
import Button from '@pluralsight/ps-design-system-button'
import {
  CheckIcon,
  ChannelIcon,
  PencilIcon,
  PlayIcon,
  UserIcon,
} from '@pluralsight/ps-design-system-icon'

import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

// NOTE: add packages and other common imports as needed in examples

export const PACKAGE_MAP = {
  '@pluralsight/ps-design-system-avatar': { Avatar },
  '@pluralsight/ps-design-system-carousel': { Carousel },
  '@pluralsight/ps-design-system-card': { Card },
  '@pluralsight/ps-design-system-button': { Button },
  '@pluralsight/ps-design-system-icon': {
    CheckIcon,
    ChannelIcon,
    PencilIcon,
    PlayIcon,
    UserIcon,
  },
  react: { React },
  'react-router-dom': { Router, withRouter },
}

export function mapPackageNameToScopes(pkgName: string) {
  return PACKAGE_MAP[pkgName]
}

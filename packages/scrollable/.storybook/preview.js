import './wdyr.js'

import React from 'react'

import { addDecorator, configure } from '@storybook/react'

import centerDecorator from '@pluralsight/ps-design-system-storybook-addon-center'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

addDecorator(centerDecorator)
addDecorator(themeDecorator)

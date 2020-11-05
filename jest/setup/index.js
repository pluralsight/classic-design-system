import 'raf/polyfill.js'
import 'jest-prop-type-error'

import './match-media.js'
import './react-dom.js'

import addons, { mockChannel } from '@storybook/addons'
addons.setChannel(mockChannel())

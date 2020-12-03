import 'raf/polyfill.js'
import 'jest-prop-type-error'

import './match-media.js'
import './react-dom.js'

import MutationObserver from 'mutation-observer'

import addons, { mockChannel } from '@storybook/addons'
global.MutationObserver = MutationObserver
addons.setChannel(mockChannel())

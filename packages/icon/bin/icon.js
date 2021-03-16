#!/usr/bin/env node

import arg from 'arg'

import { generateComponents } from '../cli/generate-components.js'
import { cleanSvgs } from '../cli/clean-svgs.js'

const args = arg({
  '--dest': String,
  '--src': String,
  '--ext': String,
  '--clean': Boolean,
  '-c': '--clean',
  '-d': '--dest',
  '-s': '--src',
  '-e': '--ext'
})
const {
  _: extra,
  '--dest': dest,
  '--src': src,
  '--ext': ext,
  '--clean': clean
} = args

!clean && generateComponents({ dest, src, ext, core: extra.includes('core') })
clean && cleanSvgs({ dest, src })

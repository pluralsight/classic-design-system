#!/usr/bin/env node
const arg = require('arg')
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

const { generateComponents } = require('../cli/generate-components')
const { cleanSvgs } = require('../cli/clean-svgs')
!clean && generateComponents({ dest, src, ext, core: extra.includes('core') })
clean && cleanSvgs({ dest, src })

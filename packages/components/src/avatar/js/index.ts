import sha1 from 'tiny-hashes/sha1'

import { colors, fallbackPixel } from '../vars/index'

export const getInitials = (fullname?: string) => {
  if (!fullname || !fullname.length) return ':)'

  return fullname[0].toUpperCase()
}

export const getColorByName = (name?: string) => {
  const stableRandNumber = parseInt(sha1(name).replace(/[^0-9]/g, '')[0], 10)
  return colors[stableRandNumber] || colors[0]
}

export const transformSrc = (src = '') => {
  const hasGravatar = /gravatar/.exec(src)
  if (!hasGravatar) return src

  const sep = /\?/.exec(src) ? '&' : '?'
  const fallback = encodeURIComponent(fallbackPixel)

  return `${src}${sep}d=${fallback}`
}

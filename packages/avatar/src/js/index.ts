import { colors, fallbackPixel } from '../vars'
import sha1 from './sha1.js'

export const getInitials = (fullname: string) => {
  if (!fullname || !fullname.length) return ':)'

  return fullname[0].toUpperCase()
}

export const getColorByName = (name: string) => {
  const stableRandNumber = parseInt(sha1(name).replace(/[^0-9]/g, '')[0], 10)
  return colors[stableRandNumber] || colors[0]
}

export const transformSrc = (src: string) => {
  const hasGravatar = /gravatar/.exec(src)
  if (!hasGravatar) return src

  const sep = /\?/.exec(src) ? '&' : '?'
  const fallback = encodeURIComponent(fallbackPixel)

  return `${src}${sep}d=${fallback}`
}

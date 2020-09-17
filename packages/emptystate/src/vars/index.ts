import { keyMirror } from '@pluralsight/ps-design-system-util'

const illustrations = [
  'bookmark',
  'channel',
  'cloud',
  'code',
  'data',
  'document',
  'magnify',
  'signal',
  'video',
  'zen'
] as const

export type IllustrationNames = typeof illustrations[number]

export const illustrationNames = keyMirror(...illustrations)

export const sizes = keyMirror('small', 'large')

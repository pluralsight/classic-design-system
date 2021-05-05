import { keyMirror } from '../../util'

const illustrations = [
  'bookmark',
  'channel',
  'cloud',
  'code',
  'data',
  'document',
  'error',
  'image',
  'lightning',
  'lock',
  'magnify',
  'people',
  'signal',
  'skillIQ',
  'upload',
  'video',
  'wrench',
  'zen'
] as const

export type IllustrationNames = typeof illustrations[number]

export const illustrationNames = keyMirror(...illustrations)

export const sizes = keyMirror('small', 'large')

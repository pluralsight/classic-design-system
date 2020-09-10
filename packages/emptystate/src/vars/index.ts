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

// TODO: move to utils or core package
type KeyMirror<Keys extends string[]> = { readonly [K in Keys[number]]: K }

function keyMirror<Keys extends string[]>(...inputs: Keys) {
  const mirrored = inputs.reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as KeyMirror<Keys>
  )

  return Object.freeze(mirrored)
}

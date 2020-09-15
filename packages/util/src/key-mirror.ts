export type KeyMirror<Keys extends string[]> = {
  readonly [K in Keys[number]]: K
}

export function keyMirror<Keys extends string[]>(...inputs: Keys) {
  const mirrored = inputs.reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as KeyMirror<Keys>
  )

  return Object.freeze(mirrored)
}

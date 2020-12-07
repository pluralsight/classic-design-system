import { ForwardRefExoticComponent, NamedExoticComponent, FC } from 'react'

export function displayNameMatches(
  instance: any,
  el: NamedExoticComponent | FC | ForwardRefExoticComponent<any>
) {
  return instance && instance?.type?.displayName === el.displayName
}

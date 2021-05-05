import React from 'react'

export function displayNameMatches(
  instance: any,
  el:
    | React.NamedExoticComponent
    | React.FC
    | React.ForwardRefExoticComponent<any>
) {
  return instance && instance?.type?.displayName === el.displayName
}

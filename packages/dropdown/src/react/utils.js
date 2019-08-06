import React from 'react'

export function findMatchingActionMenuItem(menu, value) {
  if (!menu || !value) return

  const items = React.Children.toArray(menu.props.children)
  let matchingItem = items.find(it => it.props.value === value)

  const nestedMenus = items.map(item => item.props.nested)
  if (!matchingItem && nestedMenus.length > 0) {
    matchingItem = nestedMenus.reduce((found, nested) => {
      if (found) return found

      return findMatchingActionMenuItem(nested, value)
    }, undefined)
  }

  return matchingItem
}

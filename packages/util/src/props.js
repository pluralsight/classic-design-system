const isPropInWhitelist = (whitelist, key) =>
  whitelist.some(regex =>
    typeof regex === 'string' ? new RegExp(regex).test(key) : regex.test(key)
  )

/**
 * @deprecated
 */
export const whitelistProps = (props, whitelist) =>
  Object.keys(props).reduce((newProps, key) => {
    if (isPropInWhitelist(whitelist, key)) newProps[key] = props[key]
    return newProps
  }, {})

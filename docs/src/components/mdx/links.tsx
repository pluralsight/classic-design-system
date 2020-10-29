import DSLink from '@pluralsight/ps-design-system-link'
import { Link as GatsbyLink } from 'gatsby'
import React, { AllHTMLAttributes } from 'react'

export const A: React.FC<AllHTMLAttributes<HTMLAnchorElement>> = props => {
  const isExternal = /[a-z]+:\/\//.test(props.href)

  return (
    <DSLink>
      {isExternal ? (
        <a {...props} rel="noopener noreferrer" />
      ) : (
        <GatsbyLink {...props} to={props.href} />
      )}
    </DSLink>
  )
}

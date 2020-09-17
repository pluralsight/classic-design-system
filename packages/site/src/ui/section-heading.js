import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'

import {
  colorsBackgroundLight,
  layout
} from '@pluralsight/ps-design-system-core'

import Heading from './heading.js'
import { addHeading } from './content.js'

export default function SectionHeading(props) {
  const { children, notice } = props

  const el = useRef()

  useEffect(() => {
    if (!el.current) return

    const href = formatHref(children)
    addHeading(children, href)

    const shouldFocus =
      // eslint-disable-next-line eqeqeq
      typeof window != 'undefined' && window.location.hash === href

    if (!shouldFocus) return

    el.current.focus()
    setTimeout(_ => el.current.scrollIntoView(), 1)
  }, [children])

  return (
    <>
      <div>
        <Heading size={Heading.sizes.large}>
          <h2>
            <a
              id={formatId(children)}
              className="link"
              href={formatHref(children)}
              ref={el}
            >
              {props.notice && <span className="notice">{notice}</span>}

              {children}
            </a>
          </h2>
        </Heading>
      </div>

      <style jsx>{`
        .link {
          align-items: center;
          color: currentColor;
          display: flex;
          text-decoration: none;
        }
        .link:focus {
          background: ${colorsBackgroundLight[1]};
          outline: none;
        }
        .notice {
          align-items: center;
          display: flex;
          margin-right: ${layout.spacingMedium};
        }
      `}</style>
    </>
  )
}

SectionHeading.propTypes = {
  children: PropTypes.node,
  notice: PropTypes.node
}

const formatId = href => href.toLowerCase().split(' ').join('-')

const formatHref = href => '#' + formatId(href)

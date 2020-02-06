import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Badge from '@pluralsight/ps-design-system-badge'
import {
  colorsBackgroundLight,
  layout
} from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'

export default function Guideline(props) {
  const isSingleCol = props.columnCount === 1

  const Layout = isSingleCol
    ? layoutProps => <Fragment {...layoutProps} />
    : layoutProps => {
        return (
          <EqualColumnLayout
            count={numToLayoutCount(props.columnCount)}
            {...layoutProps}
          />
        )
      }

  return (
    <>
      <Layout>
        <div
          className={`box${isSingleCol ? ' box--vertical' : ''}`}
          style={props.doStyle}
        >
          {props.do}

          <div className="badgeWrapper">
            <Badge color={Badge.colors.green} className="badge">
              Do
            </Badge>
          </div>
        </div>

        <div
          className={`box${isSingleCol ? ' box--vertical' : ''}`}
          style={props.dontStyle}
        >
          {props.dont}

          <div className="badgeWrapper">
            <Badge color={Badge.colors.red} className="badge">
              Don't
            </Badge>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .guideline {
          padding: ${layout.spacingXSmall} 0 ${layout.spacingXLarge} 0;
        }

        .badgeWrapper {
          position: absolute;
          top: 0;
          left: 0;
        }

        .box {
          background: ${colorsBackgroundLight[2]};
          border-radius: 12px;
          height: 100%;
          padding: ${layout.spacingXLarge};
          position: relative;
        }

        .box--vertical {
          margin-bottom: ${layout.spacingMedium};
        }
      `}</style>
    </>
  )
}

Guideline.defaultProps = {
  columnCount: 2
}

Guideline.propTypes = {
  columnCount: PropTypes.oneOf([1, 2, 3, 4, 6]),
  do: PropTypes.node,
  doStyle: PropTypes.object,
  dont: PropTypes.node,
  dontStyle: PropTypes.object
}

const numToLayoutCount = num => {
  switch (num) {
    case 2:
      return EqualColumnLayout.counts.two
    case 3:
      return EqualColumnLayout.counts.three
    case 4:
      return EqualColumnLayout.counts.four
    case 6:
      return EqualColumnLayout.counts.six
    default:
      return null
  }
}

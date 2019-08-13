import classnames from 'classnames'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Badge from '@pluralsight/ps-design-system-badge/react.js'
import core from '@pluralsight/ps-design-system-core'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react.js'

function Guideline(props) {
  const isSingleCol = props.columnCount === 1
  const boxClassName = classnames('box', { 'box--vertical': isSingleCol })

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
    <Fragment>
      <style jsx>{`
        .guideline {
          padding: ${core.layout.spacingXSmall} 0 ${core.layout.spacingXLarge} 0;
        }

        .badgeWrapper {
          position: absolute;
          top: 0;
          left: 0;
        }

        .box {
          background: ${core.colors.bone};
          border-radius: 12px;
          height: 100%;
          padding: ${core.layout.spacingXLarge};
          position: relative;
        }

        .box--vertical {
          margin-bottom: ${core.layout.spacingMedium};
        }
      `}</style>

      <Layout>
        <div className={boxClassName} style={props.doStyle}>
          {props.do}

          <div className="badgeWrapper">
            <Badge color={Badge.colors.green} className="badge">
              Do
            </Badge>
          </div>
        </div>

        <div className={boxClassName} style={props.dontStyle}>
          {props.dont}

          <div className="badgeWrapper">
            <Badge color={Badge.colors.red} className="badge">
              Don't
            </Badge>
          </div>
        </div>
      </Layout>
    </Fragment>
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

export default Guideline

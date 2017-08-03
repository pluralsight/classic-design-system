import glamorous from 'glamorous'

import classNames from 'classnames'
import core from '@pluralsight/ps-design-system-core'
import styleable from 'react-styleable'
import React from 'react'

const sizes = { tiny: 'tiny', small: 'small', medium: 'medium', large: 'large' }

const styleSize = ({ size }) =>
  ({
    tiny: {
      fontSize: core.type.fontSizeXSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `0 ${core.layout.spacingXSmall}`,
      height: '24px'
    },
    small: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingXSmall}`,
      height: '32px'
    },
    medium: {
      fontSize: core.type.fontSizeSmall,
      lineHeight: core.type.lineHeightStandard,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingMedium}`,
      height: '40px'
    },
    large: {
      fontSize: core.type.fontSizeMedium,
      lineHeight: core.type.lineHeightExtra,
      padding: `${core.layout.spacingTiny} ${core.layout.spacingMedium}`,
      height: '48px'
    }
  }[size])

const styleAppearance = ({ appearance }) =>
  ({
    stroke: {
      border: `1px solid ${core.colors.orange}`,
      color: core.colors.orange,
      background: 'none',
      ':hover': {
        border: `1px solid ${core.colors.orangeLight}`,
        color: core.colors.orangeLight,
        background: 'none'
      }
    },
    flat: {
      border: 'none',
      color: core.colors.gray02,
      background: 'none',
      ':hover': {
        color: core.colors.white,
        background: core.colors.gray04
      }
    }
  }[appearance])

const styleDisabled = ({ disabled, appearance }) =>
  disabled
    ? {
        color: core.colors.gray02,
        ':hover': core.colors.gray02,
        ...(appearance === 'stroke' ? { border: 'none' } : null),
        ...(appearance === 'flat'
          ? {
              opacity: 0.4,
              ':hover': { color: core.colors.gray02, background: 'none' }
            }
          : { background: core.colors.gray03 })
      }
    : null

const Button = glamorous.button(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: `${core.layout.spacingSmall} ${core.layout.spacingMedium}`,
    border: 0,
    borderRadius: 2,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    textAlign: 'center',
    color: core.colors.white,
    background: core.colors.orange,
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    transition: `all ${core.motion.speedNormal}`
  },
  styleSize,
  styleAppearance,
  styleDisabled
)

export default props => <Button {...props}>{props.children}</Button>

// import css from '../css/index.module.css'

// const getClassName = props =>
//   classNames({
//     [props.css['ps-button']]: true,
//     [props.css['ps-button--' + props.appearance]]: props.appearance,
//     [props.css['ps-button--' + props.size]]: props.size,
//     [props.css['ps-button--disabled']]: props.disabled,
//     [props.css['ps-button--icon-align-right']]:
//       props.icon && props.iconAlign === 'right',
//     [props.css['ps-button--icon-only']]:
//       React.Children.count(props.children) <= 0,
//     [props.className]: props.className
//   })

// const mapIconSize = props => {
//   const btnToIconSizes = {
//     tiny: 'tiny',
//     small: 'small',
//     medium: 'small',
//     large: 'small'
//   }
//   return btnToIconSizes[props.size] ? btnToIconSizes[props.size] : 'small'
// }

// const rmSystemProps = props => {
//   const { appearance, disabled, css, icon, iconAlign, size, ...rest } = props
//   return rest
// }

// const formatProps = props => ({
//   disabled: props.disabled,
//   ...rmSystemProps(props),
//   className: getClassName(props)
// })

// const renderIcon = props =>
//   props.icon
//     ? <div className={props.css['ps-button__icon']}>
//         {React.cloneElement(props.icon, {
//           css: {
//             'ps-icon__fg--fill': props.css['ps-icon__fg--fill'],
//             'ps-icon__fg--stroke': props.css['ps-icon__fg--stroke']
//           },
//           size: mapIconSize(props)
//         })}
//       </div>
//     : null

// export const Button = props => {
//   return (
//     <button {...formatProps(props)}>
//       {renderIcon(props)}
//       <span>{props.children}</span>
//     </button>
//   )
// }

// import PropTypes from 'prop-types'
// Button.propTypes = {
//   appearance: PropTypes.oneOf(['stroke', 'flat']),
//   disabled: PropTypes.bool,
//   icon: PropTypes.element,
//   size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large'])
// }
// Button.defaultProps = {
//   disabled: false,
//   size: 'medium'
// }

// export default styleable(css)(Button)

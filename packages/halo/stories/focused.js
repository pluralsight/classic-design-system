import * as glamor from 'glamor'
import React from 'react'

import core from '@pluralsight/ps-design-system-core'

import withDefaultTheme from '../src/react/with-default-theme'

const styles = {
  base: glamor.css({
    background: core.colors.bone,
    border: `1px solid transparent`,
    borderRadius: 2,
    color: core.colors.gray03,
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightBook,
    height: '40px',
    lineHeight: core.type.lineHeightStandard,
    minWidth: '192px',
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    position: 'relative',
    width: '100%'
  }),
  dark: glamor.css({}),
  light: glamor.css({
    background: core.colors.white,
    borderColor: core.colors.gray02
  })
}

class Focused extends React.Component {
  componentDidMount () {
    if (this.ref) this.ref.focus()
  }

  render () {
    const { className, themeName, ...filteredProps } = this.props

    const classes = [
      className,
      styles.base,
      ...(themeName === 'dark' && [styles.dark]),
      ...(themeName === 'light' && [styles.light])
    ]
      .join(' ')
      .trim()

    return (
      <div {...filteredProps} className={classes} ref={el => (this.ref = el)} />
    )
  }
}

Focused.defaultProps = {
  children: 'focused',
  tabIndex: 0
}

export default withDefaultTheme(Focused)

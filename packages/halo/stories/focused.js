import * as glamor from 'glamor'
import React from 'react'

import core from '@pluralsight/ps-design-system-core'

import withDefaultTheme from '../src/react/with-default-theme'

const styles = {
  base: glamor.css({
    background: core.colors.bone,
    borderRadius: 2,
    cursor: 'pointer',
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightStandard,
    outline: 'none',
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  }),
  dark: glamor.css({}),
  light: glamor.css({
    background: core.colors.gray02,
    borderColor: core.colors.gray02,
    color: core.colors.white
  }),
  pill: glamor.css({
    borderRadius: 1000
  })
}

class Focused extends React.Component {
  componentDidMount () {
    if (this.ref) this.ref.focus()
  }

  render () {
    const { className, shape, themeName, ...filteredProps } = this.props

    const classes = [
      className,
      styles.base,
      ...(themeName === 'dark' && [styles.dark]),
      ...(themeName === 'light' && [styles.light]),
      ...(shape === 'pill' && [styles.pill])
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

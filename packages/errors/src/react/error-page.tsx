import { compose, css, media } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import { headingSizes } from '@pluralsight/ps-design-system-text'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'

import Heading from './heading'
import icons from './icon-loader'

const styles = {
  page: ({ themeName }) => {
    const label = 'psds-error-page'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      media(
        '(min-width: 769px)',
        stylesheet['@media (min-width: 769px)'][`.${label}`]
      )
    )
  },
  icon: ({ themeName }) => {
    const label = 'psds-error-page__icon'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  text: () => {
    const label = 'psds-error-page__text'

    return media(
      '(min-width: 769px)',
      stylesheet['@media (min-width: 769px)'][`.${label}`]
    )
  },
  code: ({ themeName }) =>
    css(
      stylesheet['.psds-error-page__code'],
      stylesheet[`.psds-error-page__code.psds-theme--${themeName}`]
    ),
  search: ({ themeName }) => {
    const label = 'psds-error-page__search'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  searchIcon: ({ themeName }) =>
    css(
      stylesheet['.psds-error-page__search__icon'],
      stylesheet[`.psds-error-page__search__icon.psds-theme--${themeName}`]
    ),
  searchInput: ({ themeName }) => {
    const label = 'psds-error-page__search__input'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}

const SearchForm = props => (
  <form action={props.action} method="get" {...styles.search(props)}>
    <div {...styles.searchIcon(props)}>{icons.search()}</div>
    <input
      {...styles.searchInput(props)}
      type="text"
      name="q"
      placeholder="Search"
    />
  </form>
)
SearchForm.propTypes = {
  action: PropTypes.string
}

const ErrorPage = props => {
  const themeName = useTheme()
  const allProps = {
    ...props,
    themeName
  }
  return (
    <div {...styles.page(allProps)}>
      {allProps.iconId && icons[allProps.iconId] && (
        <div {...styles.icon(allProps)}>{icons[allProps.iconId]()}</div>
      )}
      <div {...styles.text(allProps)}>
        <Heading size={headingSizes.medium}>
          <h1>{allProps.text}</h1>
        </Heading>
      </div>
      <div {...styles.code(allProps)}>
        <Heading size={headingSizes.smallCaps}>
          <h2>Error code: {allProps.code}</h2>
        </Heading>
      </div>
      {allProps.href && <Button href={allProps.href}>Contact support</Button>}
      {allProps.action && <SearchForm {...allProps} />}
    </div>
  )
}
ErrorPage.propTypes = {
  action: PropTypes.string,
  code: PropTypes.string,
  href: PropTypes.string,
  iconId: PropTypes.oneOf(Object.keys(icons)),
  text: PropTypes.string
}

export default ErrorPage

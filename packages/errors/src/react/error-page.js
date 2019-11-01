import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import * as textVars from '@pluralsight/ps-design-system-text/vars'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'

import Heading from './heading.js'
import icons from './icon-loader.js'

const styles = {
  page: ({ themeName }) =>
    glamor.css(
      css['.psds-error-page'],
      css[`.psds-error-page.psds-theme--${themeName}`],
      {
        '@media (min-width: 769px)':
          css['@media (min-width: 769px)']['.psds-error-page']
      }
    ),
  icon: ({ themeName }) =>
    glamor.css(
      css['.psds-error-page__icon'],
      css[`.psds-error-page__icon.psds-theme--${themeName}`]
    ),
  text: props =>
    glamor.css({
      '@media (min-width: 769px)': {
        '> h1': css['@media (min-width: 769px)']['.psds-error-page__text > h1']
      }
    }),
  code: props => glamor.css(css['.psds-error-page__code']),
  search: ({ themeName }) =>
    glamor.css(
      css['.psds-error-page__search'],
      css[`.psds-error-page__search.psds-theme--${themeName}`]
    ),
  searchIcon: _ => glamor.css(css['.psds-error-page__search__icon']),
  searchInput: ({ themeName }) =>
    glamor.css(
      css['.psds-error-page__search__input'],
      css[`.psds-error-page__search__input.psds-theme--${themeName}`]
    )
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
        <Heading size={textVars.headingSizes.medium}>
          <h1>{allProps.text}</h1>
        </Heading>
      </div>
      <div {...styles.code(allProps)}>
        <Heading size={textVars.headingSizes.smallCaps}>
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

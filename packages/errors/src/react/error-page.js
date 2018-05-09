import Button from '@pluralsight/ps-design-system-button/react'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import icons from './icons'

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
    <Icon id={Icon.ids.search} {...styles.searchIcon(props)} />
    <input
      {...styles.searchInput(props)}
      type="text"
      name="q"
      placeholder="Search"
    />
  </form>
)

const ErrorPage = (props, context) => {
  const allProps = {
    ...props,
    themeName: context.themeName || themeDefaultName
  }
  return (
    <div {...styles.page(allProps)}>
      {allProps.iconId &&
        icons[allProps.iconId] && (
          <div {...styles.icon(allProps)}>{icons[allProps.iconId](React)}</div>
        )}
      <div {...styles.text(allProps)}>
        <Text.Heading size={Text.Heading.sizes.medium}>
          <h1>{allProps.text}</h1>
        </Text.Heading>
      </div>
      <div {...styles.code(allProps)}>
        <Text.Heading size={Text.Heading.sizes.smallCaps}>
          <h2>Error code: {allProps.code}</h2>
        </Text.Heading>
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
ErrorPage.contextTypes = {
  themeName: PropTypes.string
}

export default ErrorPage

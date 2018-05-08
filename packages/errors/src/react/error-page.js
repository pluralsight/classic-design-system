import Button from '@pluralsight/ps-design-system-button/react'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text/react'

import css from '../css'
import icons from './icons'

const styles = {
  page: props =>
    glamor.css(css['.psds-error-page'], {
      '@media (min-width: 769px)':
        css['@media (min-width: 769px)']['.psds-error-page']
    }),
  icon: props => glamor.css(css['.psds-error-page__icon']),
  text: props =>
    glamor.css({
      '@media (min-width: 769px)': {
        '> h1': css['@media (min-width: 769px)']['.psds-error-page__text > h1']
      }
    }),
  code: props => glamor.css(css['.psds-error-page__code']),
  search: props => glamor.css(css['.psds-error-page__search']),
  searchInput: props => glamor.css(css['.psds-error-page__search__input'])
}

const SearchForm = props => (
  <form action={props.action} method="get" {...styles.search(props)}>
    <Icon id={Icon.ids.search} />
    <input
      {...styles.searchInput(props)}
      type="text"
      name="q"
      placeholder="Search"
    />
  </form>
)

const ErrorPage = props => (
  <div {...styles.page(props)}>
    {props.iconId &&
      icons[props.iconId] && (
        <div {...styles.icon(props)}>{icons[props.iconId](React)}</div>
      )}
    <div {...styles.text(props)}>
      <Text.Heading size={Text.Heading.sizes.medium}>
        <h1>{props.text}</h1>
      </Text.Heading>
    </div>
    <div {...styles.code(props)}>
      <Text.Heading size={Text.Heading.sizes.smallCaps}>
        <h2>Error code: {props.code}</h2>
      </Text.Heading>
    </div>
    {props.href && <Button href={props.href}>Contact support</Button>}
    {props.action && <SearchForm {...props} />}
  </div>
)
ErrorPage.propTypes = {
  action: PropTypes.string,
  code: PropTypes.string,
  href: PropTypes.string,
  iconId: PropTypes.oneOf(Object.keys(icons)),
  text: PropTypes.string
}

export default ErrorPage

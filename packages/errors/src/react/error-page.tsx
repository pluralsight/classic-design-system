import { compose, css, media } from 'glamor'
import React, { HTMLAttributes } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import { headingSizes } from '@pluralsight/ps-design-system-text'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

import Heading from './heading'
import icons from './icon-loader'

const styles = {
  page: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-error-page'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      media(
        '(min-width: 769px)',
        stylesheet['@media (min-width: 769px)']['.psds-error-page']
      )
    )
  },
  icon: (themeName: ValueOf<typeof themeNames>) => {
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
      stylesheet['@media (min-width: 769px)']['.psds-error-page__text']
    )
  },
  code: (themeName: ValueOf<typeof themeNames>) =>
    css(
      stylesheet['.psds-error-page__code'],
      stylesheet[`.psds-error-page__code.psds-theme--${themeName}`]
    ),
  search: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-error-page__search'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  searchIcon: (themeName: ValueOf<typeof themeNames>) =>
    css(
      stylesheet['.psds-error-page__search__icon'],
      stylesheet[`.psds-error-page__search__icon.psds-theme--${themeName}`]
    ),
  searchInput: (themeName: ValueOf<typeof themeNames>) => {
    const label = 'psds-error-page__search__input'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}
interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {
  action?: string
  themeName: ValueOf<typeof themeNames>
}
const SearchForm: React.FC<SearchFormProps> = ({
  action,
  themeName,
  ...props
}) => (
  <form action={action} method="get" {...styles.search(themeName)} {...props}>
    <div {...styles.searchIcon(themeName)}>{icons.search()}</div>
    <input
      {...styles.searchInput(themeName)}
      type="text"
      name="q"
      placeholder="Search"
    />
  </form>
)

export interface ErrorPageProps extends HTMLAttributes<HTMLFormElement> {
  action?: string
  code?: string
  href?: string
  iconId?: keyof typeof icons
  text?: string
}

const ErrorPage: React.FC<ErrorPageProps> = props => {
  const themeName = useTheme()
  const allProps = {
    ...props,
    themeName
  }
  return (
    <div {...styles.page(themeName)}>
      {allProps.iconId && icons[allProps.iconId] && (
        <div {...styles.icon(themeName)}>{icons[allProps.iconId]()}</div>
      )}
      <div {...styles.text()}>
        <Heading size={headingSizes.medium}>
          <h1>{allProps.text}</h1>
        </Heading>
      </div>
      <div {...styles.code(themeName)}>
        <Heading size={headingSizes.smallCaps}>
          <h2>Error code: {allProps.code}</h2>
        </Heading>
      </div>
      {allProps.href && <Button href={allProps.href}>Contact support</Button>}
      {allProps.action && <SearchForm {...allProps} />}
    </div>
  )
}
export default ErrorPage

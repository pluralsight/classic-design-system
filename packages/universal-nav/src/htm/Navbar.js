import { html } from './html.js'
import PropTypes from 'prop-types'
import styles from './styles.css'
console.log(styles)

/**
 * TODO: how to work with forwardRef
 * Do all frameworks use className?
 *  */

const Slots = ({ brand, items, user, utility, onMobileMenuClick }) =>
  html`
    <div className="${styles['psds-navbar__mobile-menu']}">
      ${onMobileMenuClick}
    </div>
    <div class="${styles['psds-navbar__brand']}">${brand}</div>
    <div class="${styles['psds-navbar__items']}">${items}</div>
    <div class="${styles['psds-navbar__utility']}">${utility}</div>
    <div class="${styles['psds-navbar__user']}">${user}</div>
  `

export const Navbar = props => html`
  <nav className="${styles['psds-navbar']}">
    <${Slots} ...${props} />
  </nav>
`

Slots.propTypes = {
  brand: PropTypes.node,
  items: PropTypes.node,
  onMobileMenuClick: PropTypes.func,
  utility: PropTypes.node,
  user: PropTypes.node
}

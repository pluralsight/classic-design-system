import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

export const callAll = (...fns) => fns.filter(Boolean).forEach(fn => fn && fn())

export const Navbar = ({ brand, items, user, utility, onMobileMenuClick }) => {
  return [
    brand && createPortal(brand, document.querySelector('.psds-navbar__brand')),
    items && createPortal(items, document.querySelector('.psds-navbar__items')),
    user && createPortal(user, document.querySelector('.psds-navbar__user')),
    utility &&
      createPortal(utility, document.querySelector('.psds-navbar__utility')),
    onMobileMenuClick &&
      createPortal(
        onMobileMenuClick,
        document.querySelector('.psds-navbar__utility')
      )
  ].filter(Boolean)
}

Navbar.displayName = 'Navbar'
Navbar.propTypes = {
  brand: PropTypes.node,
  items: PropTypes.node,
  onMobileMenuClick: PropTypes.func,
  utility: PropTypes.node,
  user: PropTypes.node
}

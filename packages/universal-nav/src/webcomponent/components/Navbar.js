import { element, html } from '../lib/index.js'

export const Navbar = element(
  'navbar',
  html`
    <div part="mobile-menu">
      <slot name="mobile-menu"></slot>
    </div>
    <div part="brand">
      <slot name="brand"></slot>
    </div>
    <div part="items">
      <slot name="items"></slot>
    </div>
    <div part="utility">
      <slot name="utility"></slot>
    </div>
    <div part="user">
      <slot name="user"></slot>
    </div>
  `
)

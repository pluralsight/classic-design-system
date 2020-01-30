import asideLayoutCSS from './aside-layout.js'
import equalColumnLayoutCSS from './equal-column-layout.js'
import pageHeadingLayoutCSS from './page-heading-layout.js'
import pageWidthLayoutCSS from './page-width-layout.js'

export {
  asideLayoutCSS,
  equalColumnLayoutCSS,
  pageHeadingLayoutCSS,
  pageWidthLayoutCSS
}

export default {
  ...asideLayoutCSS,
  ...equalColumnLayoutCSS,
  ...pageHeadingLayoutCSS,
  ...pageWidthLayoutCSS
}

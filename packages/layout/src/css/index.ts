import asideLayoutCSS from './aside-layout'
import equalColumnLayoutCSS from './equal-column-layout'
import pageHeadingLayoutCSS from './page-heading-layout'
import pageWidthLayoutCSS from './page-width-layout'

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

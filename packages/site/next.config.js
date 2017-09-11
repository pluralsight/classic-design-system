module.exports = {
  // TODO: read directory to make more dynamic
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/install': { page: '/install' },
      '/contribute': { page: '/contribute' },
      '/components/actionmenu': { page: '/components/actionmenu' },
      '/components/badge': { page: '/components/badge' },
      '/components/button': { page: '/components/button' },
      '/components/card': { page: '/components/card' },
      '/components/icon': { page: '/components/icon' },
      '/components/row': { page: '/components/row' },
      '/components/tab': { page: '/components/tab' },
      '/components/text': { page: '/components/text' },
      '/core/build': { page: '/core/build' },
      '/core/usage': { page: '/core/usage' },
      '/core/color': { page: '/core/color' },
      '/core/spacing': { page: '/core/spacing' },
      '/core/typography': { page: '/core/typography' }
    }
  }
}

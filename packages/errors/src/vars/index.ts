import { keyMirror } from '@pluralsight/ps-design-system-util'

const illustrations = ['error'] as const

export type IllustrationNames = typeof illustrations[number]

export const illustrationNames = keyMirror(...illustrations)

export const codes = {
  403: {
    illustration: illustrationNames.error,
    heading: 'You’re not authorized to view this page',
    caption: 'Try contacting support or your plan administrator.',
    errorCode: 'error code: 403'
  },
  404: {
    illustration: illustrationNames.error,
    heading: 'The page you are looking for can’t be found',
    caption: 'Check the web address and try again.',
    errorCode: 'error code: 404'
  },
  500: {
    illustration: illustrationNames.error,
    heading: 'There’s a problem loading this page',
    caption:
      'Please try again. If you continue to experience problems, let us know.',
    errorCode: 'error code: 500'
  },
  503: {
    illustration: illustrationNames.error,
    heading: 'The site is currently unavailable',
    caption:
      'We expect everything back in order shortly. Sorry for the inconvenience.',
    errorCode: 'error code: 503'
  },
  504: {
    illustration: illustrationNames.error,
    heading: 'There’s a problem loading this page',
    caption:
      'Please try again. If you continue to experience problems, let us know.',
    errorCode: 'error code: 504'
  }
}

export const sizes = keyMirror('small', 'large')

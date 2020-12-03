import { Illustration } from './types'

import ErrorIllustration from './error.dist'
import ErrorIllustrationSmall from './error-small.dist'

const error: Illustration = Object.assign(ErrorIllustration, {
  small: ErrorIllustrationSmall
})

export { error }

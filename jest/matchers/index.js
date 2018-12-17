import {
  ensureNoExpected as ensureNoMatcherArgs,
  matcherHint
} from 'jest-matcher-utils'

function toExist(actual, expected) {
  ensureNoMatcherArgs(expected, '.toExist')

  const pass = !!actual
  const message = () =>
    matcherHint('.toExist', 'received', '', { isNot: this.isNot })

  return { message, pass }
}

expect.extend({ toExist })

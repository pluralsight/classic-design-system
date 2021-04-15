import { refactorCssVars } from '..'
test('tokens', () => {
  expect(refactorCssVars).toMatchSnapshot()
})

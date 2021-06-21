import { cssVars } from '..'

test('tokens', () => {
  expect(cssVars).toMatchSnapshot()
})

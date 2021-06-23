import { classNames } from '..'

test('classNames()', () => {
  expect(classNames('class-1', 'class-2')).toBe('class-1 class-2')
})

test('classNames(): falsey', () => {
  const condtionTrue = true
  const conditionFalse = false
  const actual = classNames(
    'class-1',
    conditionFalse && 'class-2',
    condtionTrue && 'class-3'
  )
  expect(actual).toBe('class-1 class-3')
})

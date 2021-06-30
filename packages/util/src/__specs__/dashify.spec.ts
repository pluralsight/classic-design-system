import { dashify } from '../dashify'

it('keeps lowercase', () => {
  expect(dashify('select')).toEqual('select')
})

it('converts to lowercase', () => {
  expect(dashify('Select')).toEqual('select')
})

it('converts camelCase to kebab-case', () => {
  expect(dashify('selectMe')).toEqual('select-me')
})

it('appends dash to numbers', () => {
  expect(dashify('select1')).toEqual('select-1')
  expect(dashify('select2again')).toEqual('select-2-again')
})

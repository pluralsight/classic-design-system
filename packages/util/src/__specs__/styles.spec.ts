import { stylesFor } from '../styles'

it('returns empty object by default', () => {
  expect(stylesFor('', {})).toEqual({})
})

it('returns empty object without props', () => {
  expect(stylesFor('someKey', {})).toEqual({})
})

it('returns empty object without selectorKey', () => {
  expect(stylesFor(null, { UNSAFE_stylesFor: { some: 'css' } })).toEqual({})
})

it('returns empty object without matching selectorKey', () => {
  expect(stylesFor('other', { UNSAFE_stylesFor: { some: 'css' } })).toEqual({})
})

it('returns the css for the specific selectorKey', () => {
  expect(
    stylesFor('specific', {
      UNSAFE_stylesFor: { some: 'css', specific: { desired: 'css' } }
    })
  ).toEqual({ desired: 'css' })
})

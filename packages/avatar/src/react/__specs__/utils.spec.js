import { URL } from 'url'
import * as utils from '../utils'
import { defaultGravatarImage } from '../../vars'

describe('avatar/utils', () => {
  describe('#getInitials', () => {
    test('empty cases', () => {
      expect(utils.getInitials(null)).toEqual(undefined)
      expect(utils.getInitials('')).toEqual(undefined)
    })

    test('should return proper initials', () => {
      const cases = {
        AO: ['Alex Silva Orlando', 'Aol', 'Any Other'],
        BS: ['Bruno Ma Suba', 'Bsil', 'Bola Skl'],
        PU: ['Peter Miller Ukra', 'Puto', 'Paca Uto']
      }

      for (let initials in cases) {
        cases[initials].forEach(value => {
          expect(utils.getInitials(value)).toEqual(initials)
        })
      }
    })
  })

  describe('#getColorByName', () => {
    test('should return same color for same first letter', () => {
      expect(utils.getColorByName('Name Test')).toEqual(
        utils.getColorByName('Name Other')
      )
    })

    test('should return color when special characters as first letter', () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()'.split('')
      letters.forEach(letter => {
        expect(utils.getColorByName(`${letter} Lastname`)).toMatch(
          /^#(?:[0-9a-fA-F]{3}){1,2}$/
        )
      })
    })
  })

  describe('#transformSrc', () => {
    test('should add default transparent image when gravatar', () => {
      const src =
        'https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7'
      const url = new URL(utils.transformSrc(src))
      expect(url.href).not.toBe(src)
      expect(url.searchParams.get('d')).toEqual(defaultGravatarImage)
    })

    test('should not add default gravatar image when not gravatar', () => {
      const src = 'https://test/123'
      const url = new URL(utils.transformSrc(src))
      expect(url.href).toBe(src)
    })
  })
})

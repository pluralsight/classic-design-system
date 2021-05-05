import { URL } from 'url'

import { fallbackPixel } from '../../vars/index'
import * as utils from '../index'

describe('avatar/utils', () => {
  describe('#getInitials', () => {
    test('empty cases', () => {
      expect(utils.getInitials(null)).toEqual(':)')
      expect(utils.getInitials('')).toEqual(':)')
    })

    test('should return proper initials', () => {
      const cases = {
        A: ['Alex Silva Orlando', 'Aol', 'Any Other'],
        B: ['Bruno Ma Suba', 'Bsil', 'Bola Skl'],
        P: ['Peter Miller Ukra', 'Puto', 'Paca Uto']
      }

      for (const initials in cases) {
        cases[initials].forEach(value => {
          expect(utils.getInitials(value)).toEqual(initials)
        })
      }
    })
  })

  describe('#getColorByName', () => {
    test('should return different color for different name', () => {
      expect(utils.getColorByName('Name Test')).not.toEqual(
        utils.getColorByName('Name Other')
      )
    })

    test('same name returns repeatable color', () => {
      const input = 'Some Name'
      const original = utils.getColorByName(input)
      ;[1, 2, 3, 4, 5].forEach(_ =>
        expect(utils.getColorByName(input)).toEqual(original)
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
    test('should add the fallback tracking pixel when gravatar', () => {
      const src =
        'https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7'
      const url = new URL(utils.transformSrc(src))

      expect(url.href).not.toBe(src)
      expect(url.searchParams.get('d')).toEqual(fallbackPixel)
    })

    test('should not add default gravatar image when not gravatar', () => {
      const src = 'https://test/123'
      const url = new URL(utils.transformSrc(src))
      expect(url.href).toBe(src)
    })
  })
})

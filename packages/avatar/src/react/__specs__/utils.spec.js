import * as utils from '../utils'

describe('avatar/utils', () => {
  describe('#getInitials', () => {
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
})

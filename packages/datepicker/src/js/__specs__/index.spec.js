import * as subject from '../index'

describe('#getDaysInMonth', () => {
  test('feb 1983 had 28 days', () => {
    expect(subject.getDaysInMonth({ mm: '02', yyyy: '1983' })).toBe(28)
  })

  test('mar 2007 had 30 days', () => {
    expect(subject.getDaysInMonth({ mm: '03', yyyy: '2007' })).toBe(31)
  })

  test('feb 1964 had 29 days', () => {
    expect(subject.getDaysInMonth({ mm: '02', yyyy: '1964' })).toBe(29)
  })
})

describe('#forceValidDay', () => {
  test('below = 00 july 1964', () => {
    expect(subject.forceValidDay({ mm: '07', dd: '00', yyyy: '1964' })).toBe(1)
  })

  test('above = 31 nov 1964', () => {
    expect(subject.forceValidDay({ mm: '11', dd: '31', yyyy: '1964' })).toBe(30)
  })

  test('matches = 29 feb 1964 had 29 days', () => {
    expect(subject.forceValidDay({ mm: '02', dd: '29', yyyy: '1964' })).toBe(29)
  })
})

describe('#forceValidMonth', () => {
  test('below = 00', () => {
    expect(subject.forceValidMonth({ mm: '00' })).toBe(1)
  })

  test('matches = 1', () => {
    expect(subject.forceValidMonth({ mm: '01' })).toBe(1)
  })

  test('matches = 12', () => {
    expect(subject.forceValidMonth({ mm: '12' })).toBe(12)
  })

  test('above = 13', () => {
    expect(subject.forceValidMonth({ mm: '13' })).toBe(12)
  })
})

describe('#forceValidYear', () => {
  test('incomplete = 0', () => {
    expect(subject.forceValidYear({ yyyy: '0' })).toBe(1900)
  })

  test('incomplete = 1', () => {
    expect(subject.forceValidYear({ yyyy: '1' })).toBe(1901)
  })

  test('incomplete = 11', () => {
    expect(subject.forceValidYear({ yyyy: '11' })).toBe(1911)
  })

  test('incomplete = 111', () => {
    expect(subject.forceValidYear({ yyyy: '111' })).toBe(111)
  })
})

describe('#firstDayOfWeekForMonth', () => {
  test('0-based Tuesday returned', () => {
    expect(subject.firstDayOfWeekForMonth({ mm: '4', yyyy: '2008' })).toBe(2)
  })

  test('0-based Sunday returned', () => {
    expect(subject.firstDayOfWeekForMonth({ mm: '2', yyyy: '2009' })).toBe(0)
  })
})

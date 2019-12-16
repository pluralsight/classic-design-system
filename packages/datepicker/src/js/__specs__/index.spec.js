import * as subject from '../index.js'

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
  test('blank', () => {
    expect(subject.forceValidDay()).toBe('')
  })

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
  test('blank', () => {
    expect(subject.forceValidMonth()).toBe('')
  })

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
  test('blank', () => {
    expect(subject.forceValidYear()).toBe('')
  })

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

describe('#getFirstDayOfWeekForMonth', () => {
  test('0-based Tuesday returned', () => {
    expect(subject.getFirstDayOfWeekForMonth({ mm: '4', yyyy: '2008' })).toBe(2)
  })

  test('0-based Sunday returned', () => {
    expect(subject.getFirstDayOfWeekForMonth({ mm: '2', yyyy: '2009' })).toBe(0)
  })
})

describe('#getPrevMonthYear', () => {
  test('prev month', () => {
    expect(subject.getPrevMonthYear({ mm: '2', yyyy: '2008' })).toEqual({
      mm: 1,
      yyyy: 2008
    })
  })

  test('rollback year to last month', () => {
    expect(subject.getPrevMonthYear({ mm: '1', yyyy: '2008' })).toEqual({
      mm: 12,
      yyyy: 2007
    })
  })
})

describe('#getNextMonthYear', () => {
  test('next month', () => {
    expect(subject.getNextMonthYear({ mm: '1', yyyy: '2008' })).toEqual({
      mm: 2,
      yyyy: 2008
    })
  })

  test('rollover year to first month', () => {
    expect(subject.getNextMonthYear({ mm: '12', yyyy: '2008' })).toEqual({
      mm: 1,
      yyyy: 2009
    })
  })
})

describe('#parseDate', () => {
  test('no value', () => {
    expect(subject.parseDate()).toEqual({ dd: '', mm: '', yyyy: '' })
  })

  test('valid date', () => {
    expect(subject.parseDate('12/07/1941')).toEqual({
      dd: 7,
      mm: 12,
      yyyy: 1941
    })
  })

  test('invalid date, forces valid date', () => {
    expect(subject.parseDate('22/0/11')).toEqual({
      dd: 1,
      mm: 12,
      yyyy: 1911
    })
  })
})

describe('#formatDate', () => {
  test('no value', () => {
    expect(subject.formatDate()).toEqual(null)
  })

  test('valid date', () => {
    expect(
      subject.formatDate({
        dd: 7,
        mm: 12,
        yyyy: 1941
      })
    ).toEqual('12/7/1941')
  })
})

describe('#shallowEqual', () => {
  const { shallowEqual } = subject

  test('is true if args are falsy but equal', () => {
    expect(shallowEqual()).toBe(true)
    expect(shallowEqual(undefined, undefined)).toBe(true)
    expect(shallowEqual(null, null)).toBe(true)
    expect(shallowEqual(NaN, NaN)).toBe(true)
  })

  test('is false if a single arg is falsy', () => {
    expect(shallowEqual({})).toBe(false)
    expect(shallowEqual({}, null)).toBe(false)
    expect(shallowEqual(null, {})).toBe(false)
  })

  test('is true with two equal objects', () => {
    expect(shallowEqual({ key: 'value' }, { key: 'value' })).toBe(true)
  })

  test('is false when one object has more key/value pairs', () => {
    expect(
      shallowEqual({ key: 'value', additional: true }, { key: 'value' })
    ).toBe(false)
  })

  test('is true with equal objects but different ordered keys', () => {
    expect(
      shallowEqual({ first: '1', second: '2' }, { second: '2', first: '1' })
    ).toBe(true)
  })
})

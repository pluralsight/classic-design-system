import * as subject from '..'

describe('#getDaysInMonth', () => {
  test('feb 1983 had 28 days', () => {
    expect(subject.getDaysInMonth(new Date(1983, 1))).toBe(28)
  })

  test('mar 2007 had 30 days', () => {
    expect(subject.getDaysInMonth(new Date(2007, 2))).toBe(31)
  })

  test('feb 1964 had 29 days', () => {
    expect(subject.getDaysInMonth(new Date(1964, 1))).toBe(29)
  })
})

describe('#getFirstDayOfWeekForMonth', () => {
  test('0-based Tuesday returned', () => {
    expect(subject.getFirstDayOfWeekForMonth(new Date(2008, 3))).toBe(2)
  })

  test('0-based Sunday returned', () => {
    expect(subject.getFirstDayOfWeekForMonth(new Date(2009, 1))).toBe(0)
  })
})

describe('#getPrevMonthYear', () => {
  test('prev month', () => {
    expect(subject.getPrevMonthYear(new Date(2008, 1))).toEqual(
      new Date(2008, 0)
    )
  })

  test('rollback year to last month', () => {
    expect(subject.getPrevMonthYear(new Date(2008, 0))).toEqual(
      new Date(2007, 11)
    )
  })
})

describe('#getNextMonthYear', () => {
  test('next month', () => {
    expect(subject.getNextMonthYear(new Date(2008, 1))).toEqual(
      new Date(2008, 2)
    )
  })

  test('rollover year to first month', () => {
    expect(subject.getNextMonthYear(new Date(2008, 11))).toEqual(
      new Date(2009, 0)
    )
  })
})

describe('#areValidParts', () => {
  test('missing parts', () => {
    expect(subject.areValidParts(undefined, undefined, undefined)).toEqual(
      false
    )
  })

  test('NaNs', () => {
    expect(subject.areValidParts('ab', 'cd', '--')).toEqual(false)
  })

  test('month out of calendar range', () => {
    expect(subject.areValidParts('1999', '13', '25')).toEqual(false)
    expect(subject.areValidParts('1999', '0', '25')).toEqual(false)
  })

  test('day not valid for month', () => {
    expect(subject.areValidParts('1999', '2', '30')).toEqual(false)
    expect(subject.areValidParts('1999', '11', '31')).toEqual(false)
  })

  test('leap year', () => {
    expect(subject.areValidParts('1964', '1', '29')).toEqual(true)
  })
})

describe('#convertPartsToDate', () => {
  test('assembles valid-only date parts', () => {
    expect(subject.convertPartsToDate('1964', '2', '29')).toEqual(
      new Date(1964, 1, 29)
    )
  })
})

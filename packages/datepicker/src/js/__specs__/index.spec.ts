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

describe('#formatDate', () => {
  test('valid date', () => {
    expect(subject.formatDate(new Date(1941, 11, 7))).toEqual('12/7/1941')
  })
})

import * as subject from '../packages'

test('removes empty repos', () => {
  const packages = {}
  const usages = {
    someRepo: {},
    someOtherRepo: {}
  }
  const actual = subject.filterUpgradeOpps(packages, usages)
  expect(actual).toEqual({})
})

test('keeps dependency thats old', () => {
  const packages = {
    someDep: '8.0.0'
  }
  const usages = {
    someRepo: {
      someDep: '^7.0.0'
    }
  }
  const actual = subject.filterUpgradeOpps(packages, usages)
  expect(actual).toEqual(usages)
})

test('removes dependency thats up to date (match  major version)', () => {
  const packages = {
    someDep: '8.5.0',
    someOtherDep: '11.5.0'
  }
  const usages = {
    someRepo: {
      someDep: '^8.0.1'
    },
    someOtherRepo: {
      someDep: '^8.0.1',
      someOtherDep: '^4.2.2'
    }
  }
  const actual = subject.filterUpgradeOpps(packages, usages)
  expect(actual).toEqual({
    someOtherRepo: { someOtherDep: '^4.2.2' }
  })
})

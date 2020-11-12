import timeMock from 'timezone-mock'

beforeAll(() => {
  timeMock.register('US/Pacific')
})

afterAll(() => {
  timeMock.unregister()
})

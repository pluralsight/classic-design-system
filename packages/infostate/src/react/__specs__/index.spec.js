import InfoState from '../index'

describe('InfoState', () => {
  it('exports with compound components', () => {
    expect(InfoState.Actions).toExist()
    expect(InfoState.Caption).toExist()
    expect(InfoState.Heading).toExist()
    expect(InfoState.Illustration).toExist()
  })
})

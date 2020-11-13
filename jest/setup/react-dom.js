import ReactDOM from 'react-dom'
import MockDate from 'mockdate'

beforeAll(() => {
  ReactDOM.createPortal = jest.fn(el => el)
  MockDate.set('2000-11-22')
})

afterEach(() => {
  ReactDOM.createPortal.mockClear()
  MockDate.reset()
})

import ReactDOM from 'react-dom'

beforeAll(() => {
  ReactDOM.createPortal = jest.fn(el => el)
})

afterEach(() => {
  ReactDOM.createPortal.mockClear()
})

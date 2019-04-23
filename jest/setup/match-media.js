window.matchMedia = jest.fn().mockImplementation(query => ({
  addEventListener: jest.fn(),
  addListener: jest.fn(),
  matches: false,
  media: query,
  onchange: null,
  removeEventListener: jest.fn(),
  removeListener: jest.fn()
}))

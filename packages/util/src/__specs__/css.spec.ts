import { css } from '../css'

test('css()', () => {
  const set = css`
    :host(:not(:last-child)) {
      display: none;
    }
    .ExampleOuter {
      grid-template-columns: 1fr 60px;
    }
  `
  const returnUndefined = (): undefined => undefined
  const returnVoid = () => {}
  const returnNull = () => null
  const actual = css`
    ${set}
    .ExampleOuter {
      color: white;
    }
    ${returnUndefined()}
    ${returnVoid()}
    ${returnNull()}
    .ExampleInner {
      background-color: blue;
      padding: 0;
    }
    [data-active='${true}'] {
      color: red;
      margin-left: auto;
    }
  `
  console.log(actual)
  expect(actual).toMatchSnapshot()
})

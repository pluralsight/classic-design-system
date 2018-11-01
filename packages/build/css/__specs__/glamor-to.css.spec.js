import * as glamor from 'glamor'
import glamorToCss from '../glamor-to-css'

describe('#glamorToCss', () => {
  it('converts a simple style to flattened css', () => {
    const style = glamor.css({
      '.a': {
        color: 'black'
      }
    })

    const result = glamorToCss(style)

    expect(result).toMatchInlineSnapshot(`".a,.a{color:black;}"`)
  })

  it('converts a nested style to flattened css', () => {
    const style = glamor.css({
      '.a': {
        color: 'black',

        '&:hover': {
          color: 'white'
        }
      }
    })

    const result = glamorToCss(style)

    expect(result).toMatchInlineSnapshot(
      `".a,.a{color:black;}.a:hover,.a:hover{color:white;}"`
    )
  })
})

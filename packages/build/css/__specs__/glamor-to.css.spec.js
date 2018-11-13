import glamorToCss from '../glamor-to-css'

describe('#glamorToCss', () => {
  it('converts a simple style to flattened css', () => {
    const style = {
      '.a': {
        color: 'black'
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.a{color:black;}')
  })

  it('converts multiple styles to css', () => {
    const style = {
      '.first-style': {
        color: 'black'
      },
      '.second-style': {
        color: 'green'
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual(
      '.first-style{color:black;}.second-style{color:green;}'
    )
  })

  it('converts a nested style to flattened css', () => {
    const style = {
      '.a': {
        color: 'black',

        '&:hover': {
          color: 'white'
        }
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.a{color:black;}.a:hover{color:white;}')
  })

  it('allows unique comma-delimited selectors', () => {
    const style = {
      '.a,.b': {
        color: 'black',

        '&:hover': {
          color: 'white'
        }
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.a,.b{color:black;}.a:hover,.b:hover{color:white;}')
  })

  it('converts numbers to pixel values', () => {
    const style = {
      '.abc': {
        fontSize: 4
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.abc{font-size:4px;}')
  })
})

import glamorToCss from '../glamor-to-css.js'

describe('#glamorToCss', () => {
  it('converts a simple style to flattened css', () => {
    const style = {
      '.a': {
        color: 'black'
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.a{color:#000}')
  })

  it('does not strip values from rgba', () => {
    const style = {
      '.a': {
        color: 'rgba(170, 170, 170, 0.24)'
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.a{color:rgba(170,170,170,.24)}')
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

    expect(result).toEqual('.first-style{color:#000}.second-style{color:green}')
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

    expect(result).toEqual('.a{color:#000}.a:hover{color:#fff}')
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

    expect(result).toEqual('.a,.b{color:#000}.a:hover,.b:hover{color:#fff}')
  })

  it('converts numbers to pixel values', () => {
    const style = {
      '.abc': {
        fontSize: 4
      }
    }

    const result = glamorToCss(style)

    expect(result).toEqual('.abc{font-size:4px}')
  })

  it('converts keyframes mixed with selectors', () => {
    expect(
      glamorToCss({
        '@keyframes foo__zers': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        '.amaze': { zing: 'showman' }
      })
    ).toEqual(
      `@keyframes foo__zers {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}.amaze{zing:showman}`
    )
  })

  it('converts function selectors for keyframe animations', () => {
    expect(
      glamorToCss({
        '.psds-button__loading': ({ spin }) => ({
          animation: `${
            spin || 'psds-button__keyframes__spin'
          } 1s linear infinite`
        }),
        '.other': { whiteSpace: 'nowrap' }
      })
    ).toEqual(
      `.psds-button__loading {
  animation: psds-button__keyframes__spin 1s linear infinite;
}.other{white-space:nowrap}`
    )
  })
})

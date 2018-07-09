import jsToCss from '../js-to-css'

test('null to empty string', () => {
  expect(jsToCss()).toEqual('')
})

test('empty object to empty string', () => {
  expect(jsToCss({})).toEqual('')
})

test('single selector', () => {
  expect(jsToCss({ '.wow': {} })).toEqual(`.wow {

}`)
})

test('single selector with attribute', () => {
  expect(jsToCss({ '.wow': { attr: 'win' } })).toEqual(`.wow {
  attr: win;
}`)
})

test('dashify', () => {
  expect(jsToCss({ '.wow': { camelCase: 'hump' } })).toEqual(`.wow {
  camel-case: hump;
}`)
})

test('empty string', () => {
  expect(jsToCss({ '.wow:after': { content: ' ' } })).toEqual(`.wow:after {
  content: ' ';
}`)
})

test('single selector, multiple attribute', () => {
  expect(jsToCss({ '.wow': { camelCase: 'hump', donkey: 'kong' } }))
    .toEqual(`.wow {
  camel-case: hump;
  donkey: kong;
}`)
})

test('multiple selector, multiple attribute', () => {
  expect(
    jsToCss({
      '.amaze': { zing: 'showman' },
      '.wow': { camelCase: 'hump', donkey: 'kong' }
    })
  ).toEqual(`.amaze {
  zing: showman;
}
.wow {
  camel-case: hump;
  donkey: kong;
}`)
})

test('keyframe, nested object', () => {
  expect(
    jsToCss({
      '@keyframes foo__zers': {
        '100%': {
          opacity: 1
        }
      },
      '.amaze': { zing: 'showman' }
    })
  ).toEqual(`@keyframes foo__zers {
  100% {
    opacity: 1;
  }
}
.amaze {
  zing: showman;
}`)
})

test('keyframe multiple stops', () => {
  expect(
    jsToCss({
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
  ).toEqual(`@keyframes foo__zers {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.amaze {
  zing: showman;
}`)
})

test('selector as function', () => {
  expect(
    jsToCss({
      '.amaze': ({ fade = 'default_string' }) => ({
        normal: 'stuff',
        animation: `${fade} 100ms`
      }),
      '.wow': { camelCase: 'hump', donkey: 'kong' }
    })
  ).toEqual(`.amaze {
  normal: stuff;
  animation: default_string 100ms;
}
.wow {
  camel-case: hump;
  donkey: kong;
}`)
})

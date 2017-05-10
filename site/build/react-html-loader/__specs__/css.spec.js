import { findCssImports, findSelectors, objectize, stripImport } from '../css'

describe('#findSelectors', () => {
  test('empty input', () => {
    expect(findSelectors()).toEqual([])
    expect(findSelectors('')).toEqual([])
    expect(findSelectors('         ')).toEqual([])
  })

  test('global tags', () => {
    expect(findSelectors(`body { color: 'red' }`)).toEqual([])
  })

  test('single selector', () => {
    expect(findSelectors(`.link { color: red; }`)).toEqual(['link'])
  })
})

describe('#objectize', () => {
  test('empty array', () => {
    expect(objectize([])).toEqual({})
  })

  test('single string', () => {
    expect(objectize(['merry'])).toEqual({ merry: 'merry' })
  })

  test('multiple strings', () => {
    expect(objectize(['merry', 'christmas'])).toEqual({
      merry: 'merry',
      christmas: 'christmas'
    })
  })
})

describe('#findCssImports', () => {
  test('empty src', () => {
    expect(findCssImports(null)).toEqual([])
    expect(findCssImports('')).toEqual([])
  })

  describe('require', () => {
    test('js require', () => {
      expect(findCssImports(`require('./module')`)).toEqual([])
    })

    test('css require', () => {
      expect(findCssImports(`require('./styles.css')`)).toEqual([
        `require('./styles.css')`
      ])
    })

    test('css require non-index 0', () => {
      expect(findCssImports(`const a = 'b'; require('./styles.css')`)).toEqual([
        `require('./styles.css')`
      ])
    })

    test('css require double quote', () => {
      expect(findCssImports(`const a = 'b'; require("./styles.css")`)).toEqual([
        `require("./styles.css")`
      ])
    })

    test('css require multiple', () => {
      expect(
        findCssImports(
          `require('./styles.css'); const a = 'b'; require('./more.css')`
        )
      ).toEqual([`require('./styles.css')`, `require('./more.css')`])
    })

    test('js require multiline', () => {
      const tmpl = `
      const a = 'b'
      const mod = require('react')
      const more = 'here'
    `
      expect(findCssImports(tmpl)).toEqual([])
    })

    test('css require multiline', () => {
      const tmpl = `
      const a = 'b'
      const mod = require('./styles.css')
      const more = 'here'
      require('./globals.css')
    `
      expect(findCssImports(tmpl)).toEqual([
        `require('./styles.css')`,
        `require('./globals.css')`
      ])
    })
  })

  describe('import', () => {
    test('js import', () => {
      expect(findCssImports(`import mod from './module'`)).toEqual([])
    })

    test('css import', () => {
      expect(findCssImports(`import mod from './styles.css'`)).toEqual([
        `import mod from './styles.css'`
      ])
    })

    test('css import non-index 0', () => {
      expect(
        findCssImports(`const a = 'b'; import mod from './styles.css'`)
      ).toEqual([`import mod from './styles.css'`])
    })

    test('css import double quote', () => {
      expect(
        findCssImports(`const a = 'b'; import mod from "./styles.css"`)
      ).toEqual([`import mod from "./styles.css"`])
    })

    test('css import multiple', () => {
      expect(
        findCssImports(
          `import mod from './styles.css'; const a = 'b'; import mod2 from './more.css'`
        )
      ).toEqual([
        `import mod from './styles.css'`,
        `import mod2 from './more.css'`
      ])
    })

    test('js import multiline', () => {
      const tmpl = `
          const a = 'b'
          const mod = import mod from 'react'
          const more = 'here'
        `
      expect(findCssImports(tmpl)).toEqual([])
    })

    test('css import multiline', () => {
      const tmpl = `
          const a = 'b'
          import mod from './styles.css'
          const more = 'here'
          import mod2 from './globals.css'
        `
      expect(findCssImports(tmpl)).toEqual([
        `import mod from './styles.css'`,
        `import mod2 from './globals.css'`
      ])
    })

    test('css anonymous import', () => {
      expect(findCssImports(`import './globals.css'`)).toEqual([
        `import './globals.css'`
      ])
    })
  })
})

describe('#stripImport', () => {
  test('require', () => {
    expect(stripImport(`require('./styles.css')`)).toEqual('./styles.css')
  })

  test('require double quote', () => {
    expect(stripImport(`require("./styles.css")`)).toEqual('./styles.css')
  })

  test('import', () => {
    expect(stripImport(`import mod from './styles.css')`)).toEqual(
      './styles.css'
    )
  })

  test('import anonymous', () => {
    expect(stripImport(`import './styles.css')`)).toEqual('./styles.css')
  })

  test('import double quote', () => {
    expect(stripImport(`import "./styles.css")`)).toEqual('./styles.css')
  })
})

import Button from '@pluralsight/ps-design-system-button'
import React from 'react'

import { formatPreview } from '../preview'

describe('Preview', () => {
  describe('#formatPreview', () => {
    it('replaces `export default` with a render', () => {
      const codeWithExport = `function Test() { return <div>test</div> }
  export default Test`
      const actual = formatPreview(codeWithExport).code
      expect(actual).not.toMatch('export default Test')
      expect(actual).toMatch('render(<Test />)')
    })

    it('puts each `import` in the scope object', () => {
      const codeWithImports = `import Button from '@pluralsight/ps-design-system-button'
import React from 'react'
function Test() { return <div>2 imports</div> }
export default Test`
      const actual = formatPreview(codeWithImports)
      expect(actual.code).not.toMatch('import React')
      expect(actual.code).not.toMatch('import Button')
      expect(actual.scope).toMatchObject({ React, Button })
    })
  })
})

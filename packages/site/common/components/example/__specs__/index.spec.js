import { formatHtml } from '../index'

describe('#formatHtml', () => {
  test('empty', () => {
    expect(formatHtml()).toEqual('')
    expect(formatHtml('')).toEqual('')
  })

  test('non-html string', () => {
    expect(formatHtml('abc')).toEqual('<abc>')
  })

  test('single self-closing tag', () => {
    expect(formatHtml('<div />')).toEqual('<div />')
  })

  test('single self-closing with attributes tag', () => {
    expect(formatHtml('<div attr="one" attr2="two" />')).toEqual(
      '<div attr="one" attr2="two" />'
    )
  })

  test('multiple self-closing tags', () => {
    expect(formatHtml('<div one="here" /><div />')).toEqual(`<div one="here" />
<div />`)
  })

  test('empty matching tag', () => {
    expect(formatHtml('<div></div>')).toEqual(`<div>
</div>`)
  })

  test('single matching tag containing single self-closing tag', () => {
    expect(formatHtml('<one><two /></three>')).toEqual(`<one>
  <two />
</three>`)
  })

  test('single matching tag containing multiple self-closing tag', () => {
    expect(formatHtml('<one><two /><three /></four>')).toEqual(`<one>
  <two />
  <three />
</four>`)
  })

  test('single multi-level hierarchy', () => {
    expect(formatHtml('<one><two><three></three></two></one>')).toEqual(`<one>
  <two>
    <three>
    </three>
  </two>
</one>`)
  })

  test('mixed hierarchy', () => {
    expect(
      formatHtml(
        '<one><two><three><four></four><five><six /></five></three></two></one>'
      )
    ).toEqual(`<one>
  <two>
    <three>
      <four>
      </four>
      <five>
        <six />
      </five>
    </three>
  </two>
</one>`)
  })

  test('nested text inside tag', () => {
    expect(formatHtml('<div><span>Jake</span></div>')).toEqual(`<div>
  <span>Jake</span>
</div>`)
  })
})

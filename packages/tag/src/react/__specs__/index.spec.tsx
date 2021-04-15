import { render } from '@testing-library/react'
import React from 'react'

import Tag from '../index'
import * as vars from '../../vars/index'

describe('Tag', () => {
  it('should export sizes as a static property', () => {
    expect(Tag.sizes).toEqual(vars.sizes)
  })

  it('should render a div by default', () => {
    const onClick: React.MouseEventHandler<HTMLDivElement> = jest.fn()
    const ref = React.createRef<HTMLDivElement>()

    const { getByTestId } = render(
      <Tag data-testid="undertest" onClick={onClick} ref={ref}>
        test
      </Tag>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('div')
    expect(ref.current).not.toBeNull()
  })

  it('should render a hyperlink when an `href` is present', () => {
    const onClick: React.MouseEventHandler<HTMLAnchorElement> = jest.fn()
    const ref = React.createRef<HTMLAnchorElement>()

    const { getByTestId } = render(
      <Tag
        data-testid="undertest"
        download
        onClick={onClick}
        href="/"
        ref={ref}
      >
        test
      </Tag>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('a')
    expect(ref.current).not.toBeNull()
  })
})

import { FC } from 'react'

export const SearchPage: FC = props => {
  const { children, ...rest } = props
  return <div {...rest}>search page</div>
}

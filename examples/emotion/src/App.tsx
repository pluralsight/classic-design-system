import styled from '@emotion/styled'
import Avatar from '@pluralsight/ps-design-system-avatar'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  &:hover {
    color: white;
  }
`

export default function App() {
  return (
    <div>
      <Avatar name="Jake Trent" />

      <p>
        <Button>big emotion button</Button>
      </p>
    </div>
  )
}

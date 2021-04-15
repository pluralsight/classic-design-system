import Avatar from '@pluralsight/ps-design-system-avatar'
import Link from '@pluralsight/ps-design-system-link'
import Note from '@pluralsight/ps-design-system-note'
import { P } from '@pluralsight/ps-design-system-text'
import React from 'react'

const Example = (props) => {
  return (
    <Note
      avatar={
        <Note.AvatarLink>
          <a href="/wow">
            <Avatar name="Mark Twain" src="http://placebear.com/128/128" />
          </a>
        </Note.AvatarLink>
      }
      heading={
        <P>
          <Link appearance={Link.appearances.subtle}>
            <a href="/yow">Mark Twain</a>
          </Link>
        </P>
      }
      message={
        <P>
          Customs do not concern themselves with right or wrong or reason. But
          they have to be obeyed; one reasons all around them until he is tired,
          but he must not transgress them, it is sternly forbidden.
        </P>
      }
    />
  )
}

export default Example

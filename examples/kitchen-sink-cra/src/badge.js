import Badge from '@pluralsight/ps-design-system-badge'
import React from 'react'

function Example() {
  return (
    <div className="example-grid--col-2">
      <Badge color={Badge.colors.neutral}>Neutral Badge</Badge>
      <Badge color={Badge.colors.neutral} appearance={Badge.appearances.subtle}>
        Neutral Badge (Subtle)
      </Badge>
      <Badge color={Badge.colors.green}>Green Badge</Badge>
      <Badge color={Badge.colors.green} appearance={Badge.appearances.subtle}>
        Green Badge (Subtle)
      </Badge>
      <Badge color={Badge.colors.yellow}>Yellow Badge</Badge>
      <Badge color={Badge.colors.yellow} appearance={Badge.appearances.subtle}>
        Yellow Badge Subtle
      </Badge>
      <Badge color={Badge.colors.red}>Red Badge</Badge>
      <Badge color={Badge.colors.red} appearance={Badge.appearances.subtle}>
        Red Badge (Subtle)
      </Badge>
      <Badge color={Badge.colors.blue}>Blue Badge</Badge>
      <Badge color={Badge.colors.blue} appearance={Badge.appearances.subtle}>
        Blue Badge (Subtle)
      </Badge>
    </div>
  )
}

export default Example

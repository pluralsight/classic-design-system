import React from 'react'
import EmptyState from '@pluralsight/ps-design-system-emptystate'
import Button from '@pluralsight/ps-design-system-button'

const Comp = () => (
  <EmptyState
    heading={
      <EmptyState.Heading>Alohamora wand elf parchment</EmptyState.Heading>
    }
    caption={
      <EmptyState.Caption>
        Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who
        cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden
        forest grindylows wool socks.
      </EmptyState.Caption>
    }
    illustration={
      <EmptyState.Illustration name={EmptyState.Illustration.names.magnify} />
    }
    actions={
      <EmptyState.Actions>
        <Button appearance={Button.appearances.stroke}>Do a Thing</Button>
      </EmptyState.Actions>
    }
  />
)

export default Comp

/// <reference types="react" />

type Appearance = 'default' | 'subtle'

export interface LinkProps {
  appearance?: Appearance
}

export default function Link(props: LinkProps): React.Component<LinkProps>


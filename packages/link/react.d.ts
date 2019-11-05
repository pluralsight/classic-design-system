/// <reference types="react" />

type AppearanceMap = { default: 'default'; subtle: 'subtle' }

type Appearance = keyof AppearanceMap
export interface LinkProps {
  appearance?: Appearance
}

declare const Link: React.FunctionComponent<LinkProps> & {
  appearances: AppearanceMap
}
export default Link

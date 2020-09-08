declare module '@pluralsight/*'

declare module '@pluralsight/ps-design-system-theme' {
  export const names: { dark: 'dark'; light: 'light' }

  export const defaultName: ValueOf<typeof names>
  export const useTheme: () => ValueOf<typeof names>

  interface ThemeProps {
    children: React.ReactNode
    name?: ValueOf<typeof names>
  }

  const Theme: React.ComponentType<ThemeProps> & {
    defaultName: ValueOf<typeof names>
    names: typeof names
  }

  export default Theme
}

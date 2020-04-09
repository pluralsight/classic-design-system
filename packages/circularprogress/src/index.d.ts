import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface Styling {
  css?: Record<string, string | number>
  style?: Record<string, string | number>
  className?: string
}

export interface CircularProgressProps {
  size?: 'small' | 'medium'
  value?: number
}

type Sizes = {
  small: 'small',
  medium: 'medium'
}

export const sizes: Sizes

declare const CircularProgress: ForwardRefExoticComponent<CircularProgressProps & Styling & RefAttributes<HTMLDivElement>>
  & { sizes: Sizes }

export default CircularProgress

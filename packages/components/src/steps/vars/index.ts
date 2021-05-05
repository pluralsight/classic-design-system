import { keyMirror } from '../../util'

export const orientations = keyMirror('horizontal', 'vertical')

export const sizes = keyMirror('medium', 'large')

export const statuses = keyMirror('incomplete', 'current', 'completed')

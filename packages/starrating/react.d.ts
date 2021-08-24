import React from 'react'
export interface StarRatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (
    val: React.ReactText,
    evt: React.ChangeEvent | React.MouseEvent
  ) => void
  starCount?: number
  value?: React.ReactText | null
}
declare const StarRating: React.ForwardRefExoticComponent<
  StarRatingProps & React.RefAttributes<HTMLDivElement>
>
export default StarRating

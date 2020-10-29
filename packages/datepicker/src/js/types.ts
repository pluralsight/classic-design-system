export interface DateParts {
  mm: string
  dd: string
  yyyy: string
}
export type MonthDateParts = Pick<DateParts, 'mm' | 'yyyy'>
export type DatePartKey = 'dd' | 'mm' | 'yyyy'

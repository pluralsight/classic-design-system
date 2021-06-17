type ClassNameProps = Array<string | undefined | false | null>
export const classNames = (...classes: ClassNameProps) =>
  classes.filter(Boolean).join(' ')

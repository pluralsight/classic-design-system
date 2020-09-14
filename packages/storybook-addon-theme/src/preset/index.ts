export function config(entry: any[] = []) {
  return [
    ...entry,
    require.resolve('./add-decorator'),
    require.resolve('./default-params')
  ]
}

export function managerEntries(entry: any[] = [], _options: any) {
  return [...entry, require.resolve('../register')]
}

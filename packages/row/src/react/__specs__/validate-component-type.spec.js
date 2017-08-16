import subject from '../validate-component-type'

test('good custom component prop in single expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const actualProp = { type: { displayName: 'good' } }
  const actualProps = { image: actualProp }
  subject([Expected1])(actualProps, 'image', 'TestComponent')
})

test('bad custom component prop in single expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const actualProp = { type: { displayName: 'bad' } }
  const actualProps = { image: actualProp }
  expect(_ =>
    subject([Expected1])(actualProps, 'image', 'TestComponent')
  ).toThrow()
})

test('good custom component prop in multiple expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const Expected2 = { displayName: 'good2' }
  const actualProp = { type: { displayName: 'good2' } }
  const actualProps = { image: actualProp }
  subject([Expected1, Expected2])(actualProps, 'image', 'TestComponent')
})

test('bad custom component prop in multiple expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const Expected2 = { displayName: 'good2' }
  const actualProp = { type: { displayName: 'bad' } }
  const actualProps = { image: actualProp }
  expect(_ =>
    subject([Expected1, Expected2])(actualProps, 'image', 'TestComponent')
  ).toThrow()
})

test('good native element prop in single expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const actualProp = { type: 'good' }
  const actualProps = { image: actualProp }
  subject([Expected1])(actualProps, 'image', 'TestComponent')
})

test('bad native element prop in single expected custom component', () => {
  const Expected1 = { displayName: 'good' }
  const actualProp = { type: 'bad' }
  const actualProps = { image: actualProp }
  expect(_ =>
    subject([Expected1])(actualProps, 'image', 'TestComponent')
  ).toThrow()
})

test('bad custom component prop in 3+ expected formats error message', () => {
  const Expected1 = { displayName: 'good' }
  const Expected2 = { displayName: 'good2' }
  const Expected3 = { displayName: 'good3' }
  const actualProp = { type: { displayName: 'bad' } }
  const actualProps = { image: actualProp }
  expect(_ =>
    subject([Expected1, Expected2, Expected3])(
      actualProps,
      'image',
      'TestComponent'
    )
  ).toThrow(
    'TestComponent.image only allows "good", "good2" or "good3" but got "bad"'
  )
})

test('good primitive type prop in single expected primitive type', () => {
  const Expected1 = { displayName: 'good' }
  const actualProp = { type: 'good' }
  const actualProps = { image: actualProp }
  subject([Expected1])(actualProps, 'image', 'TestComponent')
})

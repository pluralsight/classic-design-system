import faker from 'faker'

faker.seed(666)

export const generateNestedUsers = (rows = 20) =>
  new Array(rows).fill(null).map(() => ({
    user: generateUser(),
    subRows: generateUserRows(5)
  }))

export const generateUserCourseViews = (rows = 20) =>
  new Array(rows).fill(null).map(() => ({
    courses: { active: faker.random.number(30) },
    user: generateUser(),
    viewTime: generateViewTime()
  }))

export const generateViewTime = () => ({ ms: faker.random.number(1000) })

export const generateNestedUserRows = (
  rows = 20,
  depth = 2,
  parent?: { company: any }
): any[] => {
  if (depth < 0) return []

  return new Array(rows).fill(null).map(() => {
    const user = generateUser(parent?.company)

    return {
      user,
      subRows: generateNestedUserRows(5, depth - 1, user)
    }
  })
}

export const generateCompany = () => ({
  name: faker.company.companyName()
})

export const generateJob = () => ({
  area: faker.name.jobArea(),
  title: faker.name.title()
})

export const generateUserRows = (rows = 20) =>
  new Array(rows).fill(null).map(() => ({ user: generateUser() }))

export const generateUser = (company = generateCompany()) => ({
  company,
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  handle: faker.datatype.uuid(),
  job: generateJob(),
  lastName: faker.name.lastName()
})

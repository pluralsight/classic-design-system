// @flow
import npm from 'npm'

type Packages = {
  [name: string]: string
}
type NpmPackage = {
  version: number
}
type NpmResult = {
  [packageName: string]: NpmPackage
}

export const findAll = (): Promise<Packages> =>
  new Promise((resolve, reject) => {
    npm.load({}, _ => {
      npm.commands.search(
        'ps-design-system',
        true,
        (err, result: NpmResult) => {
          if (err) {
            console.log('Error searching packages', err)
            reject(err)
          }

          const packages = Object.keys(result).reduce((acc, pkgName) => {
            acc[pkgName] = result[pkgName].version
            return acc
          }, {})

          resolve(packages)
        }
      )
    })
  })

// @flow
import npm from 'npm'

type Package = {
  name: string,
  version: number
}
type NpmPackage = {
  version: number
}
type NpmResult = {
  [packageName: string]: NpmPackage
}

export const findAll = (): Promise<Package[]> =>
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
            return acc.concat([
              { name: pkgName, version: result[pkgName].version }
            ])
          }, [])

          resolve(packages)
        }
      )
    })
  })

// @flow
import child_process from 'child_process'

type Packages = {
  [name: string]: string
}
type NpmPackage = {
  version: number
}
type NpmResult = {
  [packageName: string]: NpmPackage
}

type NpmSearchResult = {
  name: string,
  version: string
}
const searchNpm = (): Promise<NpmSearchResult[]> =>
  new Promise((resolve, reject) => {
    child_process.exec(
      'npm search ps-design-system --json --parseable',
      {
        cwd: __dirname,
        encoding: 'utf8',
        timeout: 5000
      },
      (err, stdout, stderr) => {
        if (err) {
          console.log('Error searching packages', err)
          return reject(err)
        }

        if (stderr) {
          console.log('Error output when searching packages', stderr)
          return reject(new Error(stderr))
        }

        let json
        try {
          if (typeof stdout === 'string') {
            json = JSON.parse(stdout)
            return resolve(json)
          } else {
            return reject(new Error('Child process output must be a string'))
          }
        } catch (err) {
          return reject(err)
        }
      }
    )
  })

export const findAll = async (): Promise<Packages> => {
  try {
    const list = await searchNpm()
    return list.reduce((acc, searchResult) => {
      acc[searchResult.name] = searchResult.version
      return acc
    }, {})
  } catch (err) {
    console.log('findAll repo error', err)
    return {}
  }
}

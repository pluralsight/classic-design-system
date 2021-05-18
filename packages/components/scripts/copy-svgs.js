const ncp = require('ncp').ncp
const { promises: fs } = require('fs')

ncp.limit = 16

exports.copySvgs = (...args) => {
  Promise.all(
    args.map(async ({ src, dest }) => {
      try {
        await fs.mkdir(dest, { recursive: true })
        ncp(src, dest, function (err) {
          if (err) {
            return console.error(err)
          }
          console.log('done!')
        })
      } catch (err) {
        console.error(err)
      }
    })
  )
}

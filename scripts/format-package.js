// const format = require('format-package');
// const pkg = require('<path-to-package.json>');
// const args = process.argv
const fs = require('fs/promises')

;(async function formatFiles(filePaths) {
  for (const filePath of filePaths) {
    const prevPkg = await fs.readFile(filePath, 'utf8')
    let nextPkg = prevPkg
    nextPkg = ensureExportsDefaultLast(nextPkg)

    await fs.writeFile(filePath, nextPkg, 'utf8')
  }
})(process.argv.slice(2))

function ensureExportsDefaultLast(pkg) {
  if (pkg.exports && pkg.exports.default) {
    const savedDefault = pkg.exports.default
    delete pkg.exports.default
    pkg.default = savedDefault
  }

  return pkg
}

// const options = {
//   transformations: {
//     // This reverses all the keys in dependencies
//     dependencies(key, value) {
//       return [
//         key,
//         Object.keys(value)
//           .sort()
//           .reverse()
//           .reduce((obj, k) => {
//             obj[k] = value[k];
//             return obj;
//           }, {}),
//       ];
//     },
//   },
// };

// format(pkg, options);
